import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';
import { createConfig, http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { CLIENT_CONFIG } from './viem';
import { CHAINS } from '../config/chains';

export const chains = CHAINS;

export const metaMaskConnector = injected({
  target: 'metaMask',
  shimDisconnect: false,
});
export const injectedConnector = injected({
  shimDisconnect: false,
});
export const trustConnector = injected({
  target: 'trust',
  shimDisconnect: false,
});

export const coinbaseConnector = coinbaseWallet({
  appName: 'CannaConnect',
  appLogoUrl: 'https://pancakeswap.com/logo.png', // Todo: create a logo
});

export const walletConnectConnector = walletConnect({
  // ignore the error in test environment
  // Error: To use QR modal, please install @walletconnect/modal package
  showQrModal: true,
  projectId: 'ca3ae30b36f0ecb838492fb12ee84d6f',
});

export const walletConnectNoQrCodeConnector = walletConnect({
  showQrModal: false,
  projectId: 'ca3ae30b36f0ecb838492fb12ee84d6f',
});

export function createWagmiConfig() {
  return createConfig({
    chains,
    ssr: true,
    syncConnectedChain: true,
    transports: {
      [baseSepolia.id]: http(),
    },
    ...CLIENT_CONFIG,
    connectors: [
      metaMaskConnector,
      injectedConnector,
      coinbaseConnector,
      walletConnectConnector,
      trustConnector,
    ],
  });
}
