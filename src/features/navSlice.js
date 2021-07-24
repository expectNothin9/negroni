import { createSlice } from '@reduxjs/toolkit'

import { initHome, initGames, initSettings, initBuilders } from './pageSlice'

const initialState = {
  activeTab: 'home',
  tabs: ['home', 'games', 'settings', 'builders']
}

const reduceInitAction = (state, action) => {
  const { nav } = action.payload
  const initState = { ...state, ...nav }
  return initState
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {},
  extraReducers: {
    [initHome]: reduceInitAction,
    [initGames]: reduceInitAction,
    [initSettings]: reduceInitAction,
    [initBuilders]: reduceInitAction
  }
})

export const {} = navSlice.actions

export default navSlice.reducer
