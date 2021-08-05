import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getApiLineAuthorizeUrl } from '../../utils'

const UserBox = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: var(--gap);
  border-radius: 4px;
  width: 160px;
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
const StyledLoginLink = styled.a``
const LoginLink = () => (
  <StyledLoginLink href={getApiLineAuthorizeUrl({ state: 'UNLUCKY_ACE' })}>Login</StyledLoginLink>
)
const NonLoginUser = () => (
  <UserBox>
    <LoginLink />
  </UserBox>
)
const User = () => {
  const user = useSelector(({ user }) => {
    const { selfUserId, users } = user
    return users.find((user) => user.id === selfUserId)
  })
  if (!user) {
    return <NonLoginUser />
  }
  return (
    <UserBox>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="user-avatar" src={user.avatarImage} alt="user avatar" />
      <p className="user-name">{user.displayName || user.name}</p>
    </UserBox>
  )
}

export default User
