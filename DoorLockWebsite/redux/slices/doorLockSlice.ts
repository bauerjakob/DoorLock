import { createSlice } from "@reduxjs/toolkit"

export enum DoorStates
{
  Open,
  Closed,
  Pending
}

export const doorLockSlice = createSlice(
{
    name: 'doorLock',
    initialState: {
        doorState: DoorStates.Pending
    },
    reducers: {
      setDoorState: (state, action) => {
        state.doorState = action.payload
      },
    }
});

export const { setDoorState } = doorLockSlice.actions;
export default doorLockSlice.reducer;