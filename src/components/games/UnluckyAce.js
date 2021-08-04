import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getLineAuthorizeUrl } from '../../utils'

const UserBox = styled.div``
const User = ({ id }) => <UserBox>userId: {id}</UserBox>

const StyledLoginLink = styled.a``
const LoginLink = () => (
  <StyledLoginLink href={getLineAuthorizeUrl({ state: 'UNLUCKY_ACE' })}>Login</StyledLoginLink>
)

const UnluckyAceBox = styled.section`
  --gap: 12px;
  width: 100%;
  padding-top: 48px; /* UniHeader */
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
`
const UnluckyAceIndex = () => {
  const selfUserId = useSelector(({ user }) => user.selfUserId)
  return (
    <UnluckyAceBox className="take-6">
      {selfUserId ? <User id={selfUserId} /> : <LoginLink />}
    </UnluckyAceBox>
  )
}

export default UnluckyAceIndex
