import { base, baseSepolia } from 'wagmi/chains';
import { ChainId } from '../utils';

function notEmpty(value) {
  return value !== null && value !== undefined;
}

export const PUBLIC_NODES = {
  [ChainId.BASE_SEPOLIA]: [
    // 'https://base.publicnode.com',
    'https://sepolia.base.org',
    process.env.NEXT_PUBLIC_EXPLORER_API_ENDPOINT || '',
    // ...base.rpcUrls.default.http,
    ...baseSepolia.rpcUrls.default.http,
  ].filter(notEmpty),
};
