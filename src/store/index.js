import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appReducer } from './app';

// const PERSISTED_KEYS = ['user', 'transactions', 'notifications'];

const persistConfig = {
  key: 'primary',
  // whitelist: PERSISTED_KEYS,
  blacklist: [],
  storage,
  version: 1,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    app: appReducer,
  })
);

let store;

export function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });
}

export const initializeStore = (preloadedState = undefined) => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) {
    store = _store;
  }

  return _store;
};

store = initializeStore();

export const AppDispatch = store.dispatch;
export const AppState = store.getState;
export const useAppDispatch = () => useDispatch();

export default store;

export const persistor = persistStore(store, undefined, () => {});

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
