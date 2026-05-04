import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlices';       // ✅ fixed
import cartSliceReducer from './slices/cartSlices';
import authSlicesReducer from './slices/authSlices';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,    // ✅ fixed
        cart: cartSliceReducer,
        auth: authSlicesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // ✅ fixed
});

export default store;