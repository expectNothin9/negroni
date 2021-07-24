import styled from 'styled-components'

const StyledCard = styled.div`
  width: var(--card-w);
  height: var(--card-h);
  background-color: var(--surface-dark);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  em {
    position: absolute;
    top: calc(var(--gap) / 2);
    left: 50%;
    transform: translateX(-50%);
  }
  span {
    font-size: 40px;
  }
`
const Card = ({ card }) => (
  <StyledCard>
    <em>{card.point}</em>
    <span>{card.id}</span>
  </StyledCard>
)

export default Card
