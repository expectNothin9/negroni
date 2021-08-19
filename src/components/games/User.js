import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Icon from '../Icon'
import { getApiLineAuthorizeUrl } from '../../utils'

const StyledLoginLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    font-size: 120px;
    margin-bottom: var(--gap);
  }
`
const LoginLink = () => (
  <StyledLoginLink href={getApiLineAuthorizeUrl({ state: 'GAMES' })}>
    <Icon type="account_circle" />
    Login
  </StyledLoginLink>
)
const NonLoginUser = () => <LoginLink />
const LoginUser = ({ user }) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="user-avatar" src={user.avatarImage} alt="user avatar" />
    <p className="user-name">{user.displayName || user.name}</p>
  </>
)
LoginUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string,
    avatarImage: PropTypes.string.isRequired
  }).isRequired
}

const StyledUser = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: var(--gap) var(--gap) calc(var(--gap) * 2);
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-avatar {
    width: 120px;
    height: 120px;
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
const User = ({ className }) => {
  const targetUser = useSelector(({ user: userState }) => {
    const { selfUserId, users } = userState
    return users.find((user) => user.id === selfUserId)
  })
  return (
    <StyledUser className={`user ${className}`}>
      {targetUser ? <LoginUser user={targetUser} /> : <NonLoginUser />}
    </StyledUser>
  )
}
User.propTypes = {
  className: PropTypes.string
}
User.defaultProps = {
  className: ''
}

export default User
