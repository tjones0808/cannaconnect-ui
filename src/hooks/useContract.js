import { useWalletClient } from "wagmi";
import { useMemo } from "react";
import { erc20Abi } from "viem";

import { useActiveChainId } from "./useActiveChainId";
import { EXCHANGE_CONTRACT_ADDRESS, NFT_ADDRESS, NFT_PRESALE_ADDRESS } from "../utils/setup";
import { exchangeContractABI } from "../config/abi/exchangeContract";
import { presaleNFTContractABI } from "../config/abi/presaleNFTContract";
import { getContract } from "../utils/contractHelpers";

// returns null on errors
export function useContract(addressOrAddressMap, abi, options) {
  const { chainId: currentChainId } = useActiveChainId();
  const chainId = options?.chainId || currentChainId;
  const { data: walletClient } = useWalletClient();

  return useMemo(() => {
    if (!addressOrAddressMap || !abi || !chainId) return null;
    let address;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract({
        abi,
        address,
        chainId,
        signer: walletClient ?? undefined,
      });
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [addressOrAddressMap, abi, chainId, walletClient]);
}

export function useExchangeContract() {
  return useContract(EXCHANGE_CONTRACT_ADDRESS, exchangeContractABI);
}

export function usePresaleNFTContract() {
  return useContract(NFT_PRESALE_ADDRESS, presaleNFTContractABI);
}

export function useTokenContract(tokenAddress) {
  return useContract(tokenAddress, erc20Abi);
}
