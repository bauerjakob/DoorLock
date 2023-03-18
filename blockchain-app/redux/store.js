import { configureStore } from "@reduxjs/toolkit";
import metaMaskReducer from "./slices/metaMaskSlice";

export default configureStore({
    reducer: {
        metaMask: metaMaskReducer
    }
})