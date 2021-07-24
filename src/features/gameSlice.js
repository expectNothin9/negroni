import { createSlice } from '@reduxjs/toolkit'

import { fetchTable } from './asyncThunks'

const initialState = {
  tables: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTable.fulfilled]: (state, action) => {
      state.tables.push(action.payload.table)
    }
  }
})

export const {} = gameSlice.actions

export default gameSlice.reducer
