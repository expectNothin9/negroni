import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/dist/client/router'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchPushChannelsEvent } from '../../features/asyncThunks'
import { changeMessageToPush } from '../../features/gameSlice'
import PusherChannel from '../PusherChannel'

const StyledGameState = styled.pre``
const GameState = ({ gameId }) => {
  const targetGame = useSelector(({ game: gameSlice }) =>
    gameSlice.games.find((game) => game.id === gameId)
  )
  return <StyledGameState>{JSON.stringify(targetGame.gameState, null, 2)}</StyledGameState>
}
GameState.propTypes = {
  gameId: PropTypes.string.isRequired
}

const StyledUser = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-avatar {
    width: 100%;
  }
  .user-name {
    padding: var(--gap);
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const User = ({ userId }) => {
  const targetUser = useSelector(({ user: userState }) =>
    userState.users.find((user) => user.id === userId)
  )
  return targetUser ? (
    <StyledUser className="user">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="user-avatar" src={targetUser.avatarImage} alt="user avatar" />
      <p className="user-name">{targetUser.displayName || targetUser.name}</p>
    </StyledUser>
  ) : null
}
User.propTypes = {
  userId: PropTypes.string.isRequired
}

const StyledMemberItem = styled.li`
  width: 180px;
`
const MemberItem = ({ memberId }) => (
  <StyledMemberItem>
    <User userId={memberId} />
  </StyledMemberItem>
)
MemberItem.propTypes = {
  memberId: PropTypes.string.isRequired
}

const StyledMembersList = styled.ul``
const MembersList = ({ memberIds }) => (
  <StyledMembersList className="members-list">
    {memberIds.map((memberId) => (
      <MemberItem key={memberId} memberId={memberId} />
    ))}
  </StyledMembersList>
)
MembersList.propTypes = {
  memberIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const StyledTestPusher = styled.section`
  display: flex;
  flex-direction: column;
`
const TestPusher = () => {
  const dispatch = useDispatch()
  const messageToPush = useSelector(({ game }) => game.messageToPush)
  const handleChangeMessageToPush = useCallback(
    (event) => dispatch(changeMessageToPush({ message: event.target.value })),
    [dispatch]
  )
  const handlePushMessageToPusherChannerls = useCallback(
    () => dispatch(fetchPushChannelsEvent({ message: messageToPush })),
    [dispatch, messageToPush]
  )
  return (
    <StyledTestPusher>
      <h4>Message</h4>
      <textarea value={messageToPush} onChange={handleChangeMessageToPush} />
      <button type="button" onClick={handlePushMessageToPusherChannerls}>
        Push to Pusher Channels
      </button>
    </StyledTestPusher>
  )
}

const TableBox = styled.section`
  width: 100%;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`
const TableIndex = () => {
  const router = useRouter()
  const { tableId } = router.query
  const targetTable = useSelector(({ table: tableState }) =>
    tableState.tables.find((table) => table.id === tableId)
  )
  return (
    <TableBox className="table">
      {targetTable ? (
        <>
          <MembersList memberIds={targetTable.memberIds} />
          <GameState gameId={targetTable.gameId} />
          <TestPusher />
          <PusherChannel />
        </>
      ) : (
        `tableId ${tableId} not found`
      )}
    </TableBox>
  )
}

export default TableIndex
