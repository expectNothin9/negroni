import { createSlice } from '@reduxjs/toolkit'

import { fetchUser } from './asyncThunks'
import { initGames } from './pageSlice'

const initialState = {
  selfUserId: null,
  users: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [initGames]: (state, action) => {
      if (action.payload.user) {
        state.selfUserId = action.payload.user.selfUserId
      }
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.users.push(action.payload.user)
    }
  }
})

export const {} = userSlice.actions

export default userSlice.reducer
