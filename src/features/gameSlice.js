import { createSlice } from '@reduxjs/toolkit'

import { fetchCreateTable } from './asyncThunks'

const initialState = {
  games: ['UNLUCKY_ACE'],
  table: null // { id, ownerId, memberIds }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCreateTable.fulfilled]: (state, action) => {
      state.tables = action.payload.table
    }
  }
})

export const {} = gameSlice.actions

export default gameSlice.reducer
