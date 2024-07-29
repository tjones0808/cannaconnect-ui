import { useCallback, useState } from "react";
import { BaseError, UnknownRpcError, UserRejectedRequestError } from "viem";
import { toast } from "react-toastify";

import { usePublicNodeWaitForTransaction } from "./usePublicNodeWaitForTransaction";
import Success from "../components/ToastContent/Success";
import Fail from "../components/ToastContent/Fail";

const notPreview = true;

export function parseViemError(err) {
  if (err instanceof BaseError) {
    return err;
  }
  if (typeof err === "string") {
    return new UnknownRpcError(new Error(err));
  }
  if (err instanceof Error) {
    return new UnknownRpcError(err);
  }
  return null;
}

export function getViemErrorMessage(err) {
  const error = parseViemError(err);
  if (error) {
    return error.details || error.shortMessage;
  }
  return String(err);
}

const possibleRejectMessage = [
  "Cancelled by User",
  "cancel",
  "Transaction was rejected",
  "denied",
];

export const isUserRejected = (err) => {
  if (err instanceof UserRejectedRequestError) {
    return true;
  }
  if ("details" in err) {
    // fallback for some wallets that don't follow EIP 1193, trust, safe
    if (possibleRejectMessage.some((msg) => err.details?.includes(msg))) {
      return true;
    }
  }

  // fallback for raw rpc error code
  if (err && typeof err === "object") {
    if (
      ("code" in err &&
        (err.code === 4001 || err.code === "ACTION_REJECTED")) ||
      ("cause" in err && "code" in err.cause && err.cause.code === 4001)
    ) {
      return true;
    }

    if ("cause" in err) {
      return isUserRejected(err.cause);
    }
  }
  return false;
};

export default function useCatchTxError(params) {
  const { throwUserRejectError = false, throwCustomError } = params || {};
  const [loading, setLoading] = useState(false);
  const { waitForTransaction } = usePublicNodeWaitForTransaction();
  const [txResponseLoading, setTxResponseLoading] = useState(false);

  const handleNormalError = useCallback((error) => {
    const err = parseViemError(error);
    if (err) {
      toast.error(
        `Transaction failed with error: ${
          notPreview ? error.shortMessage || error.message : error.message
        }`,
      );
    } else {
      toast.error(
        "Please try again. Confirm the transaction and make sure you are paying enough gas!",
      );
    }
  }, []);

  const handleTxError = useCallback((error, hash) => {
    const err = parseViemError(error);

    const title = err
      ? `Transaction failed with error: ${
          notPreview ? getViemErrorMessage(err) : err.message
        }`
      : "Transaction failed. For detailed error message:";
    toast.error(<Fail title={title} txHash={hash} />, {
      icon: false,
      hideProgressBar: true,
      autoClose: 5000,
    });
  }, []);

  const fetchWithCatchTxError = useCallback(
    async (callTx) => {
      let tx = null;

      try {
        setLoading(true);

        tx = await callTx();
        if (!tx) {
          return null;
        }
        const hash = typeof tx === "string" ? tx : tx.hash;

        toast.success(<Success title="Transaction Submitted" txHash={hash} />, {
          icon: false,
          hideProgressBar: true,
          autoClose: 5000,
        });

        const receipt = await waitForTransaction({
          hash,
        });
        if (receipt?.status === "success") {
          return receipt;
        }
        throw new Error("Failed");
      } catch (error) {
        if (!isUserRejected(error)) {
          if (!tx) {
            handleNormalError(error);
          } else if (throwCustomError) {
            throwCustomError();
          } else {
            handleTxError(error, typeof tx === "string" ? tx : tx.hash);
          }
        }
        if (throwUserRejectError) {
          throw error;
        }
        throw error;
      } finally {
        setLoading(false);
      }

      return null;
    },
    [
      waitForTransaction,
      throwUserRejectError,
      throwCustomError,
      handleNormalError,
      handleTxError,
    ],
  );
  const fetchTxResponse = useCallback(
    async (callTx) => {
      let tx = null;

      try {
        setTxResponseLoading(true);

        /**
         * https://github.com/vercel/swr/pull/1450
         *
         * wait for useSWRMutation finished, so we could apply SWR in case manually trigger tx call
         */
        tx = await callTx();

        if (!tx) return null;

        const hash = typeof tx === "string" ? tx : tx.hash;

        toast.success(<Success title="Transaction Submitted" txHash={hash} />, {
          icon: false,
          hideProgressBar: true,
          autoClose: 5000,
        });

        return { hash };
      } catch (error) {
        if (!isUserRejected(error)) {
          if (!tx) {
            handleNormalError(error);
          } else {
            handleTxError(error, typeof tx === "string" ? tx : tx.hash);
          }
        }
      } finally {
        setTxResponseLoading(false);
      }

      return null;
    },
    [handleNormalError, handleTxError],
  );

  return {
    fetchWithCatchTxError,
    fetchTxResponse,
    loading,
    txResponseLoading,
  };
}
