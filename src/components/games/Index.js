import styled from 'styled-components'

import Take6 from './Take6'

const StyledGames = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
