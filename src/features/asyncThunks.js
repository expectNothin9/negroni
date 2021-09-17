import { createAsyncThunk } from '@reduxjs/toolkit'

export const isFulfilled = (action) => {
  return /\/fulfilled$/.test(action.type)
}

export const isRejected = (action) => {
  return /\/rejected$/.test(action.type)
}

const responseErrorCheck = async ({ response, defaultErrorMessage = 'API failed.' }) => {
  if (!response.ok) {
    try {
      const parsedResp = await response.json()
      throw new Error(parsedResp.error.message)
    } catch (e) {
      throw new Error(`${defaultErrorMessage} ${e.message}`)
    }
  }
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
      game {
        id
        type
        players {
          id
        }
      }
    }
  }
}`,
      variables: { table }
    })
  }).then((resp) => resp.json())
}
export const fetchCreateTable = createAsyncThunk('game/fetchCreateTable', async ({ gameType }) => {
  const response = await fetch(`${API_HOST}/api/tables`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ gameType })
  })
  await responseErrorCheck({
    response,
    defaultErrorMessage: 'game/fetchCreateTable failed.'
  })
  const { table } = await response.json()
  return { table }
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
    game {
      id
      type
      players {
        id
      }
      gameState {
        status
        playersState {
          playerId
          joinedAt
          isReady
        }
      }
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
  console.log(table.game)
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

export const fetchPushChannelsEvent = createAsyncThunk(
  'game/fetchPushChannelsEvent',
  async ({ message }) => {
    const response = await fetch(`${API_HOST}/api/pusher/channels-event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
    await responseErrorCheck({
      response,
      defaultErrorMessage: 'game/fetchPushChannelsEvent failed.'
    })
    return response.json()
  }
)
