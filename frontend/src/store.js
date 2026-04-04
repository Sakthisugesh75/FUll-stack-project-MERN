import { configureStore } from '@reduxjs/toolkit'
import { apislices } from './slices/apiSlices'

export const store= configureStore({
  reducer: {
    [apislices.reducerPath]:apislices.reducer,
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apislices.middleware)
})

export default store