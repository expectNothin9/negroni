import PropTypes from 'prop-types'
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
const HandCards = ({ handCards }) => (
  <Box className="hand-cards">
    <HandCardsList>
      {handCards.map((card, idx) => (
        <li key={card.id}>
          <label htmlFor={`hand-card-${idx + 1}`}>
            <input
              type="checkbox"
              id={`handc-ard-${idx + 1}`}
              name={`hand-card-${idx + 1}`}
              value={card.id}
            />
            <Card card={card} />
          </label>
        </li>
      ))}
    </HandCardsList>
  </Box>
)
HandCards.propTypes = {
  handCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

export default HandCards
