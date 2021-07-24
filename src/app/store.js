import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

import pageReducer from '../features/pageSlice'
import navReducer from '../features/navSlice'
import gameReducer from '../features/gameSlice'

import applicationMiddleware from '../features/middleware'

const combinedReducer = combineReducers({
  page: pageReducer,
  nav: navReducer,
  game: gameReducer
})

const hydratedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return configureStore({
    reducer: hydratedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationMiddleware)
  })
}

export const nextReduxWrapper = createWrapper(initStore)
