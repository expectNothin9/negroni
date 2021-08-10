import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledUser = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: var(--gap);
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-avatar {
    width: 100%;
    border-radius: 50%;
  }
  .user-name {
    margin-top: var(--gap);
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const User = ({ userId }) => {
  const user = useSelector(({ user }) => user.users.find((user) => user.id === userId))
  return user ? (
    <StyledUser className="user">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="user-avatar" src={user.avatarImage} alt="user avatar" />
      <p className="user-name">{user.displayName || user.name}</p>
    </StyledUser>
  ) : null
}

const StyledMemberItem = styled.li`
  width: 200px;
`
const MemberItem = ({ memberId }) => (
  <StyledMemberItem>
    <User userId={memberId} />
  </StyledMemberItem>
)

const StyledMembersList = styled.ul``
const MembersList = () => {
  const table = useSelector(({ game }) => game.table)
  return (
    <StyledMembersList className="members-list">
      {table.memberIds.map((memberId) => (
        <MemberItem key={memberId} memberId={memberId} />
      ))}
    </StyledMembersList>
  )
}

const TableBox = styled.section`
  --gap: 12px;
  width: 100%;
  padding-top: 48px; /* UniHeader */
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`
const TableIndex = () => (
  <TableBox className="table">
    <MembersList />
  </TableBox>
)

export default TableIndex
