import { createAsyncThunk } from '@reduxjs/toolkit'

export const isFulfilled = (action) => {
  return /\/fulfilled$/.test(action.type)
}

export const isRejected = (action) => {
  return /\/rejected$/.test(action.type)
}

const API_HOST = process.env.NEXT_PUBLIC_API_HOST
const DGRAPH_CLOUD_GQL = process.env.NEXT_PUBLIC_DGRAPH_CLOUD_GQL

export const gqlAddTable = async ({ table }) => {
  return fetch(DGRAPH_CLOUD_GQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `mutation ($table: AddTableInput!) {
  addTable(input: [$table]) {
    table {
      id
      owner {
        id
      }
      members {
        id
      }
    }
  }
}`,
      variables: { table }
    })
  }).then((resp) => resp.json())
}
export const fetchCreateTable = createAsyncThunk('game/fetchCreateTable', async () => {
  const response = await fetch(`${API_HOST}/api/tables`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json())
  return { table: response.table }
})

export const gqlGetTable = async ({ tableId }) => {
  const response = await fetch(DGRAPH_CLOUD_GQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query {
  getTable(id: "${tableId}") {
    id
    owner {
      id
    }
    members {
      id
      name
      avatarImage
      displayName
    }
  }
}`
    })
  }).then((resp) => resp.json())
  return response
}
export const fetchTable = createAsyncThunk('game/fetchTable', async ({ tableId }) => {
  const gqlGetTableResp = await gqlGetTable({ tableId })
  const table = gqlGetTableResp.data.getTable
  if (!table) {
    throw new Error(`Table ${tableId} not found.`)
  }
  return { table }
})

// export const fetchCreateUnluckyAceGame = createAsyncThunk(
//   'unluckyAce/fetchCreateUnluckyAceGame',
//   async ({ ownerId }) => {
//     const response = await fetch(`${API_HOST}/api/games/unluckyAce`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ ownerId })
//     }).then((resp) => resp.json())
//     return { unluckyAce: response.data }
//   }
// )

export const gqlGetUser = async ({ userId }) => {
  return fetch(DGRAPH_CLOUD_GQL, {
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
  const gqlGetUserResp = await gqlGetUser({ userId })
  return { user: gqlGetUserResp.data.getUser }
})

export const gqlAddUser = async ({ user }) => {
  return fetch(DGRAPH_CLOUD_GQL, {
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
