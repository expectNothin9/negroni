import styled from 'styled-components'

import Take6 from './Take6'

const StyledGames = styled.section`
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const GamesIndex = () => {
  return (
    <StyledGames>
      <Take6 />
    </StyledGames>
  )
}

export default GamesIndex
