import { createSlice } from '@reduxjs/toolkit'

import { fetchCreateTable, fetchTable } from './asyncThunks'

const initialState = {
  tables: [
    // {
    //   id: null,
    //   ownerId: null,
    //   memberIds: [],
    //   gameId: null
    // }
  ]
}

const reduceTable = (state, action) => {
  const {
    id,
    owner: { id: ownerId },
    members,
    game: { id: gameId }
  } = action.payload.table
  state.tables.push({
    id,
    ownerId,
    memberIds: members.map((member) => member.id),
    gameId
  })
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCreateTable.fulfilled]: reduceTable,
    [fetchTable.fulfilled]: reduceTable
  }
})

// export const {} = tableSlice.actions

export default tableSlice.reducer
