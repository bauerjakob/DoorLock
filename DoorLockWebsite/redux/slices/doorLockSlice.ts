import { createSlice } from "@reduxjs/toolkit"

export const doorLockSlice = createSlice(
{
    name: 'doorLock',
    initialState: {
        doorState: false
    },
    reducers: {
      setDoorState: (state, action) => {
        state.doorState = action.payload
      },
    }
});

export const { setDoorState } = doorLockSlice.actions;
export default doorLockSlice.reducer;