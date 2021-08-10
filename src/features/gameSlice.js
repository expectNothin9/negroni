import { createSlice } from '@reduxjs/toolkit'

import { fetchCreateTable, fetchTable } from './asyncThunks'

const reduceTable = (state, action) => {
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
    [fetchCreateTable.fulfilled]: reduceTable,
    [fetchTable.fulfilled]: reduceTable
  }
})

export const {} = gameSlice.actions

export default gameSlice.reducer
