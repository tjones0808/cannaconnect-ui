import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import { ChainId, isChainSupported } from '../utils';

export const useActiveChainId = () => {
  const { chainId } = useAccount();

  const isWrongNetwork = useMemo(
    () => Boolean((chainId && !isChainSupported(chainId)) ?? false),
    [chainId]
  );

  return {
    chainId: chainId && isChainSupported(chainId) ? chainId : ChainId.BASE_SEPOLIA,
    isWrongNetwork,
  };
};
