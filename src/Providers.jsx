import { WagmiProvider } from 'wagmi';
import { useMemo } from 'react';
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import { createWagmiConfig } from './utils/wagmi';
import { useAppState } from './store/app/hooks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours
      networkMode: 'offlineFirst',
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
});

const Providers = ({  children,  dehydratedState  }) => {
  const wagmiConfig = useMemo(() => createWagmiConfig(), []);
  const { isConnected } = useAppState();
  console.log('isConnected', isConnected)
  return (
    <WagmiProvider reconnectOnMount={!!isConnected} config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
        {children}
        <ToastContainer closeButton={false} />
        </HydrationBoundary>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
