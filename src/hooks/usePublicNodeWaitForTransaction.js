import first from 'lodash/first';
import { useCallback } from 'react';

import {
  BlockNotFoundError,
  TransactionNotFoundError,
  TransactionReceiptNotFoundError,
  WaitForTransactionReceiptTimeoutError,
  createPublicClient,
  http,
} from 'viem';
import { usePublicClient } from 'wagmi';
import { useActiveChainId } from './useActiveChainId';
import { CHAINS } from '../config/chains';
import { retry, RetryableError } from '../utils/retry';

const BLOCK_TIME = 3;

export const viemClientsPublicNodes = CHAINS.reduce((prev, cur) => {
  return {
    ...prev,
    [cur.id]: createPublicClient({
      chain: cur,
      transport: http(first(cur.rpcUrls.default.http), {
        timeout: 15_000,
      }),
      batch: {
        multicall: {
          batchSize: 1024 * 200,
          wait: 16,
        },
      },
      pollingInterval: 6_000,
    }),
  };
}, {});

export function usePublicNodeWaitForTransaction() {
  const { chainId } = useActiveChainId();
  const provider = usePublicClient({ chainId });

  const waitForTransaction_ = useCallback(
    async (opts) => {
      const getTransaction = async () => {
        try {
          const selectedChain = opts?.chainId ?? chainId;
          // our custom node might be late to sync up
          if (selectedChain && viemClientsPublicNodes[selectedChain]) {
            return await viemClientsPublicNodes[
              selectedChain
            ].getTransactionReceipt({ hash: opts.hash });
          }

          if (!provider) return undefined;

          return await provider.getTransactionReceipt({ hash: opts.hash });
        } catch (error) {
          if (error instanceof TransactionNotFoundError) {
            throw new RetryableError(`Transaction not found: ${opts.hash}`);
          } else if (error instanceof TransactionReceiptNotFoundError) {
            throw new RetryableError(
              `Transaction receipt not found: ${opts.hash}`
            );
          } else if (error instanceof BlockNotFoundError) {
            throw new RetryableError(
              `Block not found for transaction: ${opts.hash}`
            );
          } else if (error instanceof WaitForTransactionReceiptTimeoutError) {
            throw new RetryableError(
              `Timeout reached when fetching transaction receipt: ${opts.hash}`
            );
          }
          throw error;
        }
      };
      return retry(getTransaction, {
        n: 10,
        minWait: 5000,
        maxWait: 10000,
        delay: BLOCK_TIME * 1000 + 1000,
      }).promise;
    },
    [chainId, provider]
  );

  return {
    waitForTransaction: waitForTransaction_,
  };
}
