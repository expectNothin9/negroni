import styled from 'styled-components'

import Theme from './Theme'

const StyledSettings = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SettingsIndex = () => {
  return (
    <StyledSettings>
      <Theme />
    </StyledSettings>
  )
}

export default SettingsIndex
