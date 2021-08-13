import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { changeTheme } from '../features/pageSlice'

const StyledMain = styled.main`
  --gap: 12px;
  background-color: var(--background);
  color: var(--on-background);
`
const Main = ({ children }) => {
  const dispatch = useDispatch()
  const theme = useSelector(({ page }) => page.theme)
  useEffect(() => {
    const localTheme = window.localStorage.getItem('AGLN_THEME')
    if (localTheme && ['light', 'dark'].includes(localTheme)) {
      dispatch(changeTheme({ theme: localTheme }))
    }
  }, [dispatch])

  return <StyledMain className={theme}>{children}</StyledMain>
}
Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
