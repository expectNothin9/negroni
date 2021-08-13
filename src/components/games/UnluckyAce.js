import styled from 'styled-components'

import User from './User'

const UnluckyAceBox = styled.section`
  width: 100%;
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
