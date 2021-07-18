import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { changeTheme } from '../features/pagesSlice'

const StyledMain = styled.main`
  background-color: var(--background);
`
const Main = ({ children }) => {
  const dispatch = useDispatch()
  const theme = useSelector(({ pages }) => pages.theme)
  useEffect(() => {
    const localTheme = window.localStorage.getItem('AGLN_THEME')
    if (localTheme && ['light', 'dark'].includes(localTheme)) {
      dispatch(changeTheme({ theme: localTheme }))
    }
  }, [dispatch])

  return <StyledMain className={theme}>{children}</StyledMain>
}

export default Main
