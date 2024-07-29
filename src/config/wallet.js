import {
  chains,
  createWagmiConfig,
  walletConnectNoQrCodeConnector,
} from '../utils/wagmi';

export const ConnectorNames = {
  MetaMask: 'metaMask',
  Injected: 'injected',
  WalletConnect: 'walletConnect',
  WalletConnectV1: 'walletConnectLegacy',
  WalletLink: 'coinbaseWalletSDK',
  TrustWallet: 'trust',
};

const createQrCode = (chainId, connect) => async () => {
  const wagmiConfig = createWagmiConfig();
  const injectedConnector = wagmiConfig.connectors.find(
    (connector) => connector.id === ConnectorNames.Injected
  );
  if (!injectedConnector) {
    return '';
  }
  // HACK: utilizing event emitter from injected connector to notify wagmi of the connect events
  const connector = {
    ...walletConnectNoQrCodeConnector({
      chains,
      emitter: injectedConnector?.emitter,
    }),
    emitter: injectedConnector.emitter,
    uid: injectedConnector.uid,
  };
  const provider = await connector.getProvider();

  return new Promise()((resolve) => {
    provider.on('display_uri', (uri) => {
      resolve(uri);
    });
    connect({ connector, chainId });
  });
};

const isMetamaskInstalled = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  if (window.ethereum?.isMetaMask) {
    return true;
  }

  if (window.ethereum?.providers?.some((p) => p.isMetaMask)) {
    return true;
  }

  return false;
};

function getTrustWalletProvider() {
  const isTrustWallet = (ethereum) => {
    // Identify if Trust Wallet injected provider is present.
    const trustWallet = !!ethereum.isTrust;
    return trustWallet;
  };

  const injectedProviderExist = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';

  // No injected providers exist.
  if (!injectedProviderExist) {
    return;
  }

  // Trust Wallet was injected into window.ethereum.
  if (isTrustWallet(window.ethereum)) {
    return window.ethereum;
  }

  // Trust Wallet provider might be replaced by another
  // injected provider, check the providers array.
  if (window.ethereum?.providers) {
    return window.ethereum.providers.find(isTrustWallet);
  }

  // In some cases injected providers can replace window.ethereum
  // without updating the providers array. In those instances, the Trust Wallet
  // can be installed and its provider instance can be retrieved by
  // looking at the global `trustwallet` object.
  return window.trustwallet;
}

const walletsConfig = ({ chainId, connect }) => {
  const qrCode = createQrCode(chainId, connect);
  return [
    {
      id: 'metamask',
      title: 'Metamask',
      icon: '/images/wallets/metamask.png',
      get installed() {
        return isMetamaskInstalled();
      },
      connectorId: ConnectorNames.MetaMask,
      deepLink: 'https://metamask.app.link/dapp/pancakeswap.finance/',
      qrCode,
      downloadLink: 'https://metamask.app.link/dapp/pancakeswap.finance/',
    },
    {
      id: 'coinbase',
      title: 'Coinbase Wallet',
      icon: `/images/wallets/coinbase.png`,
      connectorId: ConnectorNames.WalletLink,
    },
    {
      id: 'trust',
      title: 'Trust Wallet',
      icon: `/images/wallets/trust.png`,
      connectorId: ConnectorNames.TrustWallet,
      get installed() {
        return !!getTrustWalletProvider()
      },
      deepLink: 'https://link.trustwallet.com/open_url?url=https://cannachain.vercel.app/', // Todo: update the link
      downloadLink: 'https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph',
      guide: {
        desktop: 'https://trustwallet.com/browser-extension',
        mobile: 'https://trustwallet.com/',
      },
      qrCode,
    },
    {
      id: 'walletconnect',
      title: 'WalletConnect',
      icon: `/images/wallets/walletconnect.png`,
      connectorId: ConnectorNames.WalletConnect,
    },
  ];
};

export const createWallets = (chainId, connect) => {
  let config;
  config = walletsConfig({chainId, connect});

  return config;
};
