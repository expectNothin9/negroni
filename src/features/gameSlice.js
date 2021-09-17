import { createSlice } from '@reduxjs/toolkit'

import { fetchTable } from './asyncThunks'

const initialState = {
  games: [
    // {
    //   id: 'GAME_UUID',
    //   type: 'UNLUCKEY_ACS',
    //   playOnTableId: 'TABLE_UUID',
    //   playerIds: ['LINE_USER_ID'],
    //   gameState: {
    //     cards: [
    //       { suite: 'SPADE', point: 1, placeAt: '1-1', ownedBy: null, isRevealed: true },
    //       { suite: 'HEART', point: 10, placeAt: '1-2', ownedBy: null, isRevealed: true },
    //       { suite: 'DIAMOND', point: 11, placeAt: '4-13', ownedBy: null, isRevealed: true },
    //       { suite: 'CLUB', point: 12, placeAt: '2-5', ownedBy: null, isRevealed: true }
    //     ],
    //     status: 'WAITING_TO_PLAY',
    //     playersState: [{ playerId: 'LINE_USER_ID', joinedAt: 'YYYY-MM-DD', isReady: false }]
    //   }
    // }
  ],
  messageToPush: 'Hello Pusher Channels'
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeMessageToPush: (state, action) => {
      state.messageToPush = action.payload.message
    }
  },
  extraReducers: {
    [fetchTable.fulfilled]: (state, action) => {
      const {
        id: tableId,
        game: { id, type, players, gameState }
      } = action.payload.table
      state.games.push({
        id,
        type,
        playOnTableId: tableId,
        playerIds: players.map((player) => player.id),
        gameState
      })
    }
  }
})

export const { changeMessageToPush } = gameSlice.actions

export default gameSlice.reducer
