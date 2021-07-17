import { createSlice } from '@reduxjs/toolkit'

import { initHome, initProfile, initAuthor } from './pagesSlice'

const initialState = {
  activeTab: 'home',
  tabs: ['home', 'profile', 'author'],
  isDisplayed: true,
  isExpanded: true
}

const reduceInitAction = (state, action) => {
  const { nav } = action.payload
  const initState = { ...state, ...nav }
  return initState
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    // changeActiveTab: (state, action) => {
    //   state.activeTab = action.payload.toTab
    // },
    toggleIsDisplayed: (state) => {
      state.isDisplayed = !state.isDisplayed
    },
    toggleIsExpanded: (state) => {
      state.isExpanded = !state.isExpanded
    }
  },
  extraReducers: {
    [initHome]: reduceInitAction,
    [initProfile]: reduceInitAction,
    [initAuthor]: reduceInitAction
  }
})

export const { changeActiveTab, toggleIsDisplayed, toggleIsExpanded } = navSlice.actions

export default navSlice.reducer
