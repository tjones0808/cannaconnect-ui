import { getContract as viemGetContract } from 'viem';
import { viemClients } from './viem';
import { ChainId } from '.';

export const getContract = ({
  abi,
  address,
  chainId = ChainId.BASE_SEPOLIA,
  publicClient,
  signer,
}) => {
  const c = viemGetContract({
    abi,
    address,
    client: {
      public: publicClient ?? viemClients[chainId],
      wallet: signer,
    },
  });

  return {
    ...c,
    account: signer?.account,
    chain: signer?.chain,
  };
};
