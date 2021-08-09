import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getApiLineAuthorizeUrl } from '../../utils'

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
const StyledLoginLink = styled.a``
const LoginLink = () => (
  <StyledLoginLink href={getApiLineAuthorizeUrl({ state: 'UNLUCKY_ACE' })}>Login</StyledLoginLink>
)
const NonLoginUser = () => <LoginLink />
const LoginUser = ({ user }) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="user-avatar" src={user.avatarImage} alt="user avatar" />
    <p className="user-name">{user.displayName || user.name}</p>
  </>
)

const User = ({ className }) => {
  const user = useSelector(({ user }) => {
    const { selfUserId, users } = user
    return users.find((user) => user.id === selfUserId)
  })
  return (
    <StyledUser className={`user ${className}`}>
      {user ? <LoginUser user={user} /> : <NonLoginUser />}
    </StyledUser>
  )
}
User.defaultProps = {
  className: ''
}

export default User
