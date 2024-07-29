import { useCallback } from 'react';
import { useWalletClient } from 'wagmi';

import { useActiveChainId } from './useActiveChainId';
import { useGasPrice } from '../store/app/hooks';
import { publicClient } from '../utils/viem';

// add 10%
export function calculateGasMargin(value, margin = 1000n) {
  return (value * (10000n + margin)) / 10000n;
}

export function useCallWithGasPrice() {
  const gasPrice = useGasPrice();
  const { chainId } = useActiveChainId();
  const { data: walletClient } = useWalletClient();

  const callWithGasPriceWithSimulate = useCallback(
    async (contract, methodName, methodArgs, overrides) => {
      if (!contract) {
        throw new Error('No valid contract');
      }
      if (!walletClient) {
        throw new Error('No valid wallet connect');
      }
      const { gas: gas_, ...overrides_ } = overrides || {};
      let gas = gas_;
      if (!gas) {
        gas = await publicClient({ chainId }).estimateContractGas({
          abi: contract.abi,
          address: contract.address,
          account: walletClient.account,
          functionName: methodName,
          args: methodArgs,
          value: 0n,
          ...overrides_,
        });
      }

      const res = await walletClient.writeContract({
        abi: contract.abi,
        address: contract.address,
        account: walletClient.account,
        functionName: methodName,
        args: methodArgs,
        gasPrice,
        gas: calculateGasMargin(gas),
        value: 0n,
        ...overrides_,
      });

      const hash = res;

      return {
        hash,
      };
    },
    [chainId, gasPrice, walletClient]
  );

  return { callWithGasPrice: callWithGasPriceWithSimulate };
}
