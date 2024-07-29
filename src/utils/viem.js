import first from 'lodash/first';
import { createPublicClient, fallback, http } from 'viem';
import { base, baseSepolia } from 'viem/chains';

import { PUBLIC_NODES } from '../config/nodes';
import { CHAINS } from '../config/chains';

export function createViemPublicClients({ transportSignal } = {}) {
  return CHAINS.reduce((prev, cur) => {
    return {
      ...prev,
      [cur.id]: createPublicClient({
        chain: cur,
        transport: fallback(
          PUBLIC_NODES[cur.id].map((url) =>
            http(url, {
              timeout: 10_000,
              fetchOptions: {
                signal: transportSignal,
              },
            })
          ),
          {
            rank: false,
          }
        ),
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
}

export const viemClients = createViemPublicClients();

export const getViemClients = createViemPublicClientGetter({ viemClients });

export function createViemPublicClientGetter({
  viemClients: viemClientsOverride,
  ...restParams
} = {}) {
  const clients = viemClientsOverride || createViemPublicClients(restParams);

  return function getClients({ chainId }) {
    return clients[chainId];
  };
}

// const PUBLIC_MAINNET = 'https://base.publicnode.com';
const PUBLIC_MAINNET = 'https://base-sepolia-rpc.publicnode.com';

export const CLIENT_CONFIG = {
  batch: {
    multicall: {
      batchSize: 1024 * 200,
      wait: 16,
    },
  },
  pollingInterval: 6_000,
};

export const publicClient = ({ chainId }) => {
  if (chainId && viemClients[chainId]) {
    return viemClients[chainId];
  }
  let httpString;

  if (chainId === base.id || chainId === baseSepolia.id) {
    httpString = PUBLIC_MAINNET;
  } else {
    httpString =
      chainId && first(PUBLIC_NODES[chainId])
        ? first(PUBLIC_NODES[chainId])
        : undefined;
  }

  const chain = CHAINS.find((c) => c.id === chainId);

  return createPublicClient({
    chain,
    transport: http(httpString),
    ...CLIENT_CONFIG,
  });
};
