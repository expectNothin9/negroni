import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import User from './User'
import Icon from '../Icon'
import { GAMES } from '../../utils/constants'
import { fetchCreateTable } from '../../features/asyncThunks'
import { addToast } from '../../features/pageSlice'

const StyledGameItem = styled.li`
  .game-name {
    font-family: 'Acme';
    font-size: 48px;
    font-weight: bold;
  }
`
const GameItem = ({ game }) => (
  <StyledGameItem>
    <p className="game-name">{game.name}</p>
  </StyledGameItem>
)
GameItem.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

const StyledGamesList = styled.ul``
const GamesList = () => {
  const games = Object.keys(GAMES)
  return (
    <StyledGamesList className="games-list">
      {games.map((gameId) => (
        <GameItem key={gameId} game={GAMES[gameId]} />
      ))}
    </StyledGamesList>
  )
}

const StyledCreateGameButton = styled.button`
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
  &:hover {
    background-color: var(--primary-dark);
    color: var(--on-primary-dark);
  }
`
const CreateGameButton = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(({ user }) => !!user.selfUserId)
  const selectedGameType = 'UNLUCKY_ACE' // FIXME: should select from pageSlice
  const handleClick = useCallback(() => {
    if (isLogin) {
      dispatch(fetchCreateTable({ gameType: selectedGameType }))
    } else {
      dispatch(addToast({ type: 'error', message: 'Login is required to start a game.' }))
    }
  }, [dispatch, isLogin, selectedGameType])
  return (
    <StyledCreateGameButton type="button" className="create-game" onClick={handleClick}>
      <Icon type="play_arrow" />
      START
    </StyledCreateGameButton>
  )
}

const GamesBox = styled.section`
  width: 100%;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`
const LeftBox = styled.div`
  width: calc(var(--gap) +120px + var(--gap));
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
      <CreateGameButton />
    </RightBox>
  </GamesBox>
)

export default GamesIndex
