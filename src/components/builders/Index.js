import styled from 'styled-components'

const StyledBuilders = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--on-background);
`
const BuildersIndex = () => {
  return (
    <StyledBuilders>
      <h1>Builders</h1>
    </StyledBuilders>
  )
}

export default BuildersIndex
