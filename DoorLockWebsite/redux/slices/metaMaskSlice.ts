import { createSlice } from "@reduxjs/toolkit"

export enum HasMetaMask {
  Yes,
  No,
  Pending
}

export const metaMaskSlice = createSlice(
{
    name: 'metaMask',
    initialState: {
        hasMetaMask: HasMetaMask.Pending
    },
    reducers: {
      setHasMetamask: (state, action) => {
        state.hasMetaMask = action.payload
      },
    }
});

export const { setHasMetamask } = metaMaskSlice.actions;
export default metaMaskSlice.reducer;