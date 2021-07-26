import { createAsyncThunk } from '@reduxjs/toolkit'

const API_HOST = process.env.API_HOST
export const fetchTable = createAsyncThunk('project/fetchTable', async ({ tableId }) => {
  const response = await fetch(`${API_HOST}/api/tables/${tableId}`).then((resp) => resp.json())
  return { table: response.table }
})
