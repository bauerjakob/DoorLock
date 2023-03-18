import { createSlice } from "@reduxjs/toolkit"

export const metaMaskSlice = createSlice(
{
    name: 'metaMask',
    initialState: {
        hasMetaMask: false
    },
    reducers: {
      setHasMetamask: (state, action) => {
        state.hasMetaMask = action.payload
      },
    }
});

export const { setHasMetamask } = metaMaskSlice.actions;
export default metaMaskSlice.reducer;

