import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Icon from './Icon'
import { toggleIsDisplayed, toggleIsExpanded } from '../features/navSlice'
import { getNavTabLink, getNavTabIconType } from '../utils'

const StyledNavTab = styled.li`
  color: var(--primary);
  &:hover {
    color: var(--primary-dark);
  }
  &.highlight {
    color: var(--on-primary);
    background-color: var(--primary);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 12px;
    i {
      margin-right: 16px;
    }
    span {
      text-transform: capitalize;
    }
  }
`
const NavTab = ({ id, isActive }) => {
  const link = getNavTabLink(id)
  const iconType = getNavTabIconType(id)
  return (
    <StyledNavTab className={isActive ? 'highlight' : ''}>
      <a href={link}>
        <Icon type={iconType} title={`Go to ${id} page`} />
        <span>{id}</span>
      </a>
    </StyledNavTab>
  )
}

const NavTabsList = styled.ul`
  background-color: var(--surface);
  padding: 12px 0 12px 12px;
  border-right: 6px solid var(--primary);
  overflow: hidden;
  transition: width 0.5s;
  &.slim {
    width: 64px;
  }
  &.wide {
    width: 320px;
  }
`
const ToggleButton = styled.button`
  box-sizing: content-box;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--primary-light);
  cursor: pointer;
  &:hover {
    color: var(--on-primary);
  }
`
const ToggleDisplayButton = styled(ToggleButton)`
  position: absolute;
  top: -32px;
  right: -32px;
  padding-left: 6px;
  border-top-left-radius: 6px;
`
const ToggleExpandButton = styled(ToggleButton)`
  position: absolute;
  bottom: -32px;
  right: 0;
  padding-right: 6px;
  border-bottom-right-radius: 6px;
`
const StyledNav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 40px;
  left: 0;
  transition: transform 0.5s;
  &.visible {
    transform: translateX(0);
  }
  &.hidden {
    transform: translateX(-100%);
  }
`
const Nav = () => {
  const dispatch = useDispatch()
  const { activeTab, tabs, isDisplayed, isExpanded } = useSelector(({ nav }) => nav)
  const hangleToggleIsDisplayed = useCallback(() => dispatch(toggleIsDisplayed()), [dispatch])
  const hangleToggleIsExpanded = useCallback(() => dispatch(toggleIsExpanded()), [dispatch])
  return (
    <StyledNav className={isDisplayed ? 'visible' : 'hidden'}>
      <ToggleDisplayButton
        type="button"
        className="toggle-display-button"
        onClick={hangleToggleIsDisplayed}>
        <Icon type={isDisplayed ? 'close' : 'menu'} />
      </ToggleDisplayButton>
      <NavTabsList className={isExpanded ? 'wide' : 'slim'}>
        {tabs.map((tab) => (
          <NavTab key={tab} id={tab} isActive={tab === activeTab} />
        ))}
      </NavTabsList>
      <ToggleExpandButton
        type="button"
        className="toggle-expand-button"
        onClick={hangleToggleIsExpanded}>
        <Icon type={isExpanded ? 'arrow_back' : 'arrow_forward'} />
      </ToggleExpandButton>
    </StyledNav>
  )
}

export default Nav
