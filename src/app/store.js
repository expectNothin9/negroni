import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

import pageReducer from '../features/pageSlice'
import navReducer from '../features/navSlice'
import userReducer from '../features/userSlice'
import tableReducer from '../features/tableSlice'

import applicationMiddleware from '../features/middleware'

const combinedReducer = combineReducers({
  page: pageReducer,
  nav: navReducer,
  user: userReducer,
  table: tableReducer
})

const hydratedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    return nextState
  }

  return combinedReducer(state, action)
}

const initStore = () => {
  return configureStore({
    reducer: hydratedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationMiddleware)
  })
}

export const nextReduxWrapper = createWrapper(initStore)

export default {}
