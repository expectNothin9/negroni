import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Icon from '../Icon'
import { changeTheme } from '../../features/pagesSlice'

const Caption = styled.h3`
  color: var(--on-surface);
  padding: 6px 12px 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--divider);
  font-weight: bold;
`
const RadioBox = styled.div`
  display: flex;
  input[type='radio'] {
    display: none;
  }
  label {
    display: flex;
    width: 50%;
    height: 60px;
    justify-content: center;
    align-items: center;
    color: var(--on-surface);
    cursor: pointer;
    i {
      font-size: 36px;
    }
  }
  input[type='radio']:checked + label {
    color: var(--on-secondary);
    background-color: var(--secondary);
    border-radius: 4px;
  }
`
const ThemeBox = styled.section`
  background-color: var(--surface);
  max-width: 960px;
  width: calc(100% - 24px);
  padding: 12px;
  border-radius: 4px;
`
const Theme = () => {
  const dispatch = useDispatch()
  const theme = useSelector(({ pages }) => pages.theme)
  const handleChangeTheme = useCallback(
    (event) => dispatch(changeTheme({ theme: event.target.value })),
    [dispatch]
  )
  return (
    <ThemeBox>
      <Caption>Theme</Caption>
      <RadioBox>
        <input
          id="theme-light"
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={handleChangeTheme}
        />
        <label htmlFor="theme-light">
          <Icon type="light_mode" title="light theme" />
        </label>
        <input
          id="theme-dark"
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleChangeTheme}
        />
        <label htmlFor="theme-dark">
          <Icon type="dark_mode" title="dark theme" />
        </label>
      </RadioBox>
    </ThemeBox>
  )
}

export default Theme
