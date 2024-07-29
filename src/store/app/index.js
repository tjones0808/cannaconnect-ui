import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: "",
  isConnected: false,
  isOpenConnectWallet: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppState(state, action) {
      const newState = { ...state, ...action.payload };

      return newState;
    },
    resetAppState: () => initialState,
  },
});

export const { setAppState, resetAppState } = appSlice.actions;

export const appReducer = appSlice.reducer;
