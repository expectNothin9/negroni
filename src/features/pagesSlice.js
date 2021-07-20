import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  theme: 'light'
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
    initGames: (state) => {
      state.id = 'games'
    },
    initSettings: (state) => {
      state.id = 'settings'
    },
    initBuilders: (state) => {
      state.id = 'builders'
    }
  }
})

export const { changeTheme, initHome, initGames, initSettings, initBuilders } = pagesSlice.actions

export default pagesSlice.reducer
