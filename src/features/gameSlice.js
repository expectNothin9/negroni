import { createSlice } from '@reduxjs/toolkit'

import { fetchCreateTable } from './asyncThunks'

const initialState = {
  games: ['UNLUCKY_ACE'],
  selectedGameType: 'UNLUCKY_ACE',
  table: null // { id, ownerId, memberIds, gameId }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCreateTable.fulfilled]: (state, action) => {
      const {
        id,
        owner: { id: ownerId },
        members
      } = action.payload.table
      state.table = {
        id,
        ownerId,
        memberIds: members.map((member) => member.id)
      }
    }
  }
})

export const {} = gameSlice.actions

export default gameSlice.reducer
