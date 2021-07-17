import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Icon from './Icon'
import { toggleIsExpanded } from '../features/navSlice'
import { getNavTabLink, getNavTabIconType } from '../utils'

const StyledNavTab = styled.li`
  color: var(--primary-light);
  &:hover {
    color: var(--on-primary-dark);
  }
  &.highlight {
    color: var(--on-primary-dark);
    background-color: var(--primary-dark);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
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
        <Icon type={iconType}/>
        <span>{id}</span>
      </a>
    </StyledNavTab>
  )
}

const NavTabsList = styled.ul`
  background-color: var(--primary);
  padding: 12px 0 12px 12px;
  border-right: 12px solid var(--primary-dark);
  overflow: hidden;
  transition: width .5s;
  &.slim {
    width: 72px;
  }
  &.wide {
    width: 320px;
  }
`
const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: var(--primary-dark);
  color: var(--primary-light);
  border-bottom-right-radius: 12px;
  cursor: pointer;
  &:hover {
    color: var(--on-primary-dark);
  }
`
const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`
const Nav = () => {
  const dispatch = useDispatch()
  const { activeTab, tabs, isExpanded } = useSelector(({ nav }) => nav)
  const hangleToggleIsExpanded = useCallback(() => dispatch(toggleIsExpanded()), [dispatch])
  return (
    <StyledNav>
      <NavTabsList className={isExpanded ? 'wide' : 'slim'}>
        {tabs.map((tab) => <NavTab key={tab} id={tab} isActive={tab === activeTab} />)}
      </NavTabsList>
      <ToggleButton type="button" className="toggle-button" onClick={hangleToggleIsExpanded}>
        <Icon type={isExpanded ? 'arrow_back' : 'arrow_forward'} />
      </ToggleButton>
    </StyledNav>
  )
}

export default Nav
