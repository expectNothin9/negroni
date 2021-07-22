import styled from 'styled-components'

const HandCardsList = styled.ul`
  height: 100%;
  display: flex;
  li {
    width: 10%;
    height: 100%;

    input[type='checkbox'] {
      display: none;
    }
    label {
      width: 100%;
      height: 100%;
      background-color: var(--primary-light);
      border: 4px solid var(--surface);
      border-radius: 6px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      em {
        position: absolute;
        top: 6px;
        left: 6px;
        font-size: 1.5vh;
      }
      span {
        font-size: 5.25vh;
      }
    }
  }
`
const HandCardsBox = styled.div`
  width: 100%;
  height: calc(20% - 13px);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--divider);
  margin-bottom: 12px;
  position: relative;
`
const Title = styled.p`
  position: absolute;
  top: -18px;
  left: 12px;
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
    { id: 14, point: 1 },
    { id: 15, point: 2 },
    { id: 16, point: 1 }
  ]
  return (
    <HandCardsBox>
      <Title>hand cards</Title>
      <HandCardsList>
        {cards.map((card, idx) => (
          <li key={card.id}>
            <input
              type="checkbox"
              id={`handcard-${idx + 1}`}
              name={`handcard-${idx + 1}`}
              value={card.id}
            />
            <label htmlFor={`handcard-${idx + 1}`}>
              <em>{card.point}</em>
              <span>{card.id}</span>
            </label>
          </li>
        ))}
      </HandCardsList>
    </HandCardsBox>
  )
}

export default HandCards
