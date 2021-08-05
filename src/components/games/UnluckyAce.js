import styled from 'styled-components'

import User from './User'

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
  return (
    <UnluckyAceBox className="unlucky-ace">
      <User />
    </UnluckyAceBox>
  )
}

export default UnluckyAceIndex
