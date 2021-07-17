import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../features/navSlice'
import pagesReducer from '../features/pagesSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
    pages: pagesReducer
  }
})
