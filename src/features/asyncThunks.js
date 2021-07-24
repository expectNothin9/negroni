import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTable = createAsyncThunk('project/fetchTable', async ({ tableId }) => {
  const response = await fetch(`http://localhost:3000/api/tables/${tableId}`).then((resp) =>
    resp.json()
  )
  return { table: response.table }
})
