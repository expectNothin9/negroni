import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  theme: 'light'
}

export const pageSlice = createSlice({
  name: 'page',
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
    initBuilders: (state) => {
      state.id = 'builders'
    }
  }
})

export const { changeTheme, initHome, initGames, initBuilders } = pageSlice.actions

export default pageSlice.reducer
