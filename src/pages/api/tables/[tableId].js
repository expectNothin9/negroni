import { TAKE6_CARDS, TAKE6_INITIAL_SCORE } from '../../../utils/constants'
import { MEMBERS } from '../../../utils/dummies'
import { shuffle } from '../../../utils'

const handler = (req, res) => {
  const { tableId } = req.query
  let cards = TAKE6_CARDS
  cards = shuffle(cards)
  res.status(200).json({
    table: {
      id: `TABLE_${tableId}`,
      game: {
        id: 'GAME_ID',
        type: 'take6',
        state: {
          members: MEMBERS.map((member, idx) => {
            const handCards = cards.slice(idx * 10, idx * 10 + 10).sort((a, b) => a.id - b.id)
            return {
              id: member.id,
              nickname: member.nickname, // FIXME: should leave only member id in game state
              score: TAKE6_INITIAL_SCORE,
              handCards
            }
          }),
          row1: [cards[MEMBERS.length * 10]],
          row2: [cards[MEMBERS.length * 10 + 1]],
          row3: [cards[MEMBERS.length * 10 + 2]],
          row4: [cards[MEMBERS.length * 10 + 3]]
        }
      }
    }
  })
}

export default handler
