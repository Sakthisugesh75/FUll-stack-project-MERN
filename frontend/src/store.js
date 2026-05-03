import { configureStore } from '@reduxjs/toolkit'
import { apislices } from './slices/apiSlices'
import  cartSlicereducer  from './slices/cartSlices'
import authSlicesReducer from './slices/authSlices'
export const store= configureStore({
  reducer: {
    [apislices.reducerPath]:apislices.reducer,
    cart:cartSlicereducer,
    auth:authSlicesReducer
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apislices.middleware)
})

export default store