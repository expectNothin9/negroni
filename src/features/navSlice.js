import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'profile',
  tabs: ['home', 'profile', 'author'],
  isSlim: true
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload.toTab
    },
    toggleIsSlim: (state) => {
      state.isSlim = !state.isSlim
    }
  },
})

export const { changeActiveTab, toggleIsSlim } = navSlice.actions

export default navSlice.reducer
