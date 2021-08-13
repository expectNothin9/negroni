import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: false,
  navLinks: ['/', '/games']
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    openNav: (state) => {
      state.active = true
    },
    closeNav: (state) => {
      state.active = false
    }
  }
})

export const { openNav, closeNav } = navSlice.actions

export default navSlice.reducer
