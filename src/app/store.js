import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../features/navSlice'
import pagesReducer from '../features/pagesSlice'

import applicationMiddleware from '../features/middleware'

export const store = configureStore({
  reducer: {
    nav: navReducer,
    pages: pagesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationMiddleware)
})
