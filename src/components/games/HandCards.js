import styled from 'styled-components'

import Card from './Card'

const HandCardsList = styled.ul`
  height: 100%;
  display: flex;
  li {
    padding: calc(var(--gap) / 2);
    input[type='checkbox'] {
      display: none;
    }
    label {
      box-sizing: content-box;
      width: var(--card-w);
      height: var(--card-h);
      background-color: var(--primary-light);
      border-radius: 6px;
    }
    input:checked + label {
      border-color: var(--on-surface);
    }
  }
`
const Box = styled.div`
  width: 100%;
  padding: calc(var(--gap) / 2);
  border-bottom: 1px solid var(--divider);
`
const HandCards = () => {
  const cards = [
    { id: 7, point: 1 },
    { id: 8, point: 1 },
    { id: 9, point: 1 },
    { id: 10, point: 3 },
    { id: 11, point: 5 },
    { id: 12, point: 1 },
    { id: 13, point: 1 },
    { id: 104, point: 1 },
    { id: 15, point: 2 },
    { id: 16, point: 1 }
  ]
  return (
    <Box className="hand-cards">
      <HandCardsList>
        {cards.map((card, idx) => (
          <li key={card.id}>
            <input
              type="checkbox"
              id={`handc-ard-${idx + 1}`}
              name={`hand-card-${idx + 1}`}
              value={card.id}
            />
            <label htmlFor={`hand-card-${idx + 1}`}>
              <Card card={card} />
            </label>
          </li>
        ))}
      </HandCardsList>
    </Box>
  )
}

export default HandCards
