import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  ConnectorNotFoundError,
  SwitchChainNotSupportedError,
  useAccount,
  useConnect,
  useDisconnect,
} from 'wagmi';

import { useActiveChainId } from './useActiveChainId';
import { resetAppState, setAppState } from '../store/app';
import { WalletConnectorNotFoundError, WalletSwitchChainError } from '../utils';

const useAuth = () => {
  const dispatch = useDispatch();
  const { connectAsync, connectors } = useConnect();
  const { chain } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const { chainId } = useActiveChainId();

  const login = useCallback(
    async (connectorID) => {
      const findConnector = connectors.find((c) => c.id === connectorID);
      try {
        if (!findConnector) return undefined;

        const connected = await connectAsync({
          connector: findConnector,
          chainId,
        });

        dispatch(setAppState({ isConnected: true }));

        if (connected.chainId !== chainId) {
          dispatch(
            setAppState({
              sessionChainId: connected.chainId,
            })
          );
        }

        return connected;
      } catch (error) {
        if (error instanceof ConnectorNotFoundError) {
          throw new WalletConnectorNotFoundError();
        }
        if (error instanceof SwitchChainNotSupportedError) {
          throw new WalletSwitchChainError(
            'Unable to switch network. Please try it on your wallet'
          );
        }
      }
      return undefined;
    },
    [connectors, connectAsync, chainId]
  );

  const logout = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(resetAppState());
    }
  }, [disconnectAsync, dispatch, chain?.id]);

  return { login, logout };
};

export default useAuth;
