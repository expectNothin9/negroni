import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  theme: 'dark'
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload.theme
    },
    initHome: (state) => {
      state.id = 'home'
    },
    initProfile: (state) => {
      state.id = 'profile'
    },
    initSettings: (state) => {
      state.id = 'settings'
    },
    initAuthor: (state) => {
      state.id = 'author'
    }
  }
})

export const { changeTheme, initHome, initProfile, initSettings, initAuthor } = pagesSlice.actions

export default pagesSlice.reducer
