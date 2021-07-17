import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'profile',
  tabs: ['home', 'profile', 'author'],
  isExpanded: true
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload.toTab
    },
    toggleIsExpanded: (state) => {
      state.isExpanded = !state.isExpanded
    }
  }
})

export const { changeActiveTab, toggleIsExpanded } = navSlice.actions

export default navSlice.reducer
