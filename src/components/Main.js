import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledMain = styled.main`
  background-color: var(--background);
`
const Main = ({ children }) => {
  const theme = useSelector(({ pages }) => pages.theme)
  return <StyledMain className={theme}>{children}</StyledMain>
}

export default Main
