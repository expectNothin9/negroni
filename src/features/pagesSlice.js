import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: ''
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    initHome: (state) => {
      state.id = 'home'
    },
    initProfile: (state) => {
      state.id = 'profile'
    },
    initAuthor: (state) => {
      state.id = 'author'
    }
  }
})

export const { initHome, initProfile, initAuthor } = pagesSlice.actions

export default pagesSlice.reducer
