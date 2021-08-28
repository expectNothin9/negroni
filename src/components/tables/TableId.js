import PropTypes from 'prop-types'
import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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
        </>
      ) : (
        `tableId ${tableId} not found`
      )}
    </TableBox>
  )
}

export default TableIndex
