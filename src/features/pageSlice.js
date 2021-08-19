import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  id: '',
  theme: 'light',
  toasts: [
    // {
    //   type: 'success', // success | warning | error | neutral
    //   message: 'Login is required to start a game.',
    //   dismissed: false
    // }
  ]
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
    },
    addToast: (state, action) => {
      state.toasts.push({ ...action.payload, id: uuidv4(), dismissed: false })
    },
    dismissToast: (state, action) => {
      const { toastId } = action.payload
      const targetToastIndex = state.toasts.findIndex((toast) => toast.id === toastId)
      state.toasts[targetToastIndex].dismissed = true
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload.toastId)
    }
  }
})

export const {
  changeTheme,
  initHome,
  initGames,
  initBuilders,
  addToast,
  dismissToast,
  removeToast
} = pageSlice.actions

export default pageSlice.reducer
