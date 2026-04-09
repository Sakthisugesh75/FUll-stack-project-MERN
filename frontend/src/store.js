import { configureStore } from '@reduxjs/toolkit'
import { apislices } from './slices/apiSlices'
import  cartSlicereducer  from './slices/cartSlices'
export const store= configureStore({
  reducer: {
    [apislices.reducerPath]:apislices.reducer,
    cart:cartSlicereducer
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apislices.middleware)
})

export default store