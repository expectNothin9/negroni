import { createAsyncThunk } from '@reduxjs/toolkit'

const API_HOST = process.env.API_HOST
const DGRAPH_CLOUD_GQL = process.env.DGRAPH_CLOUD_GQL

export const fetchTable = createAsyncThunk('game/fetchTable', async ({ tableId }) => {
  const response = await fetch(`${API_HOST}/api/tables/${tableId}`).then((resp) => resp.json())
  return { table: response.table }
})

export const gqlGetUser = async ({ userId }) => {
  return await fetch(DGRAPH_CLOUD_GQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query {
  getUser(id: "${userId}") {
    id
    name
    avatarImage
    displayName
  }
}`
    })
  }).then((resp) => resp.json())
}
export const fetchUser = createAsyncThunk('user/fetchUser', async ({ userId }) => {
  const response = await gqlGetUser({ userId })
  return { user: response.data.getUser }
})

export const gqlAddUser = async ({ user }) => {
  return await fetch(DGRAPH_CLOUD_GQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `mutation ($user: AddUserInput!) {
  addUser(input: [$user], upsert: true) {
    user {
      id
    }
  }
}`,
      variables: { user }
    })
  }).then((resp) => resp.json())
}
