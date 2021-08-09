import { useSelector } from 'react-redux'
import styled from 'styled-components'

import User from './User'
import Icon from '../Icon'
import { GAMES } from '../../utils/constants'

const StyledGameItem = styled.li`
  .game-name {
    font-family: 'Acme';
    font-size: 48px;
    font-weight: bold;
  }
  button.start {
    display: flex;
    align-items: center;
    margin-top: var(--gap);
    padding: calc(var(--gap) / 2);
    padding-right: var(--gap);
    font-family: 'Acme';
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    background-color: var(--primary);
    color: var(--on-primary);
    cursor: pointer;
    i {
      margin-right: calc(var(--gap) / 2);
    }
  }
  button.start:hover {
    background-color: var(--primary-dark);
    color: var(--on-primary-dark);
  }
`
const GameItem = ({ game }) => (
  <StyledGameItem>
    <p className="game-name">{game.name}</p>
    <button type="button" className="start">
      <Icon type="play_arrow" />
      START
    </button>
  </StyledGameItem>
)

const StyledGamesList = styled.ul``
const GamesList = () => {
  const games = useSelector(({ game }) => game.games)
  return (
    <StyledGamesList>
      {games.map((gameId) => (
        <GameItem key={gameId} game={GAMES[gameId]} />
      ))}
    </StyledGamesList>
  )
}

const GamesBox = styled.section`
  --gap: 12px;
  width: 100%;
  padding-top: 48px; /* UniHeader */
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`
const LeftBox = styled.div`
  width: 200px;
`
const RightBox = styled.div`
  margin-left: calc(var(--gap) * 3);
`
const GamesIndex = () => (
  <GamesBox className="games">
    <LeftBox>
      <User />
    </LeftBox>
    <RightBox>
      <GamesList />
    </RightBox>
  </GamesBox>
)

export default GamesIndex
