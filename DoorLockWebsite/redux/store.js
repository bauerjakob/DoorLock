import { configureStore } from "@reduxjs/toolkit";
import metaMaskReducer from "./slices/metaMaskSlice";
import doorLockReducer from "./slices/doorLockSlice";

export default configureStore({
    reducer: {
        metaMask: metaMaskReducer,
        doorLock: doorLockReducer
    }
})