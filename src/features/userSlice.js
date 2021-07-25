import { createSlice } from '@reduxjs/toolkit'

import { fetchTable } from './asyncThunks'

const initialState = {
  selfUserId: 'USER_1'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
})

export const {} = userSlice.actions

export default userSlice.reducer
