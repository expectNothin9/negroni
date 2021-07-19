import { createSlice } from '@reduxjs/toolkit'

import { initHome, initProfile, initSettings, initAuthor } from './pagesSlice'

const initialState = {
  activeTab: 'home',
  tabs: ['home', 'profile', 'settings', 'author']
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
    [initProfile]: reduceInitAction,
    [initSettings]: reduceInitAction,
    [initAuthor]: reduceInitAction
  }
})

export const {} = navSlice.actions

export default navSlice.reducer
