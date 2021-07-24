import { TAKE6_CARDS, TAKE6_INITIAL_SCORE } from '../../../utils/constants'
import { MEMBERS } from '../../../utils/dummies'
import { shuffle } from '../../../utils'

const handler = (req, res) => {
  const { tableId } = req.query
  console.log('[tableId].js', tableId)
  let cards = TAKE6_CARDS
  cards = shuffle(cards)
  res.status(200).json({
    table: {
      id: `TABLE_${tableId}`,
      members: MEMBERS,
      game: {
        id: 'GAME_ID',
        type: 'take6',
        state: {
          members: MEMBERS.map((member, idx) => ({
            id: member.id,
            score: TAKE6_INITIAL_SCORE,
            handCards: cards.slice(idx * 10, idx * 10 + 10)
          })),
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
