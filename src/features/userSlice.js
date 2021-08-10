import { createSlice } from '@reduxjs/toolkit'

import { fetchUser, fetchTable } from './asyncThunks'
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
    },
    [fetchTable.fulfilled]: (state, action) => {
      const { members } = action.payload.table
      members.forEach((member) => {
        if (!state.users.find((user) => user.id === member.id)) {
          state.users.push(member)
        }
      })
    }
  }
})

export const {} = userSlice.actions

export default userSlice.reducer
