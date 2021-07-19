import styled from 'styled-components'

import Nav from './Nav'

const StyledUniHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 57px;
  background-color: var(--surface);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--divider);
`
const UniHeader = () => {
  return (
    <StyledUniHeader>
      <Nav />
    </StyledUniHeader>
  )
}

export default UniHeader
