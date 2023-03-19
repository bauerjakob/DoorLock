import { createSlice } from "@reduxjs/toolkit"

export const doorLockSlice = createSlice(
{
    name: 'doorLock',
    initialState: {
        doorOpen: false
    },
    reducers: {
      setDoorOpen: (state, action) => {
        state.doorOpen = action.payload
      },
    }
});

export const { setDoorOpen } = doorLockSlice.actions;
export default doorLockSlice.reducer;