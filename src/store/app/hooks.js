import { parseEther } from "viem";
import { useActiveChainId } from "../../hooks/useActiveChainId";
import { ChainId } from "../../utils";
import { useSelector } from "react-redux";

export const GAS_PRICE = {
  default: "1",
  fast: "4",
  instant: "5",
  testnet: "100",
};

const GAS_PRICE_GWEI = {
  rpcDefault: "rpcDefault",
  default: parseEther(GAS_PRICE.default, "gwei").toString(),
  fast: parseEther(GAS_PRICE.fast, "gwei").toString(),
  instant: parseEther(GAS_PRICE.instant, "gwei").toString(),
  testnet: parseEther(GAS_PRICE.testnet, "gwei").toString(),
};

const DEFAULT_TESTNET_GAS_BIGINT = BigInt(GAS_PRICE_GWEI.testnet);

/**
 * Note that this hook will only works well for BNB chain
 */
export function useGasPrice() {
  const { chainId } = useActiveChainId();

  if (chainId === ChainId.SEPOLIA) {
    return DEFAULT_TESTNET_GAS_BIGINT;
  }

  return undefined;
}

export const useAppState = () => {
  const appState = useSelector((state) => state.app);

  return appState;
};
