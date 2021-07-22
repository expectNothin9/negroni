import styled from 'styled-components'

const Section = styled.section`
  background-color: var(--surface);
  color: var(--on-surface);
  max-width: 1280px;
  width: calc(100% - 24px);
  padding: 12px;
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    width: calc(100% - 12px);
    padding: 6px;
  }
`

export default Section
