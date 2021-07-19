import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import Icon from './Icon'
import { getNavTabLink, getNavTabIconType } from '../utils'

const StyledNavTab = styled.li`
  margin: 0 4px;
  color: var(--on-surface);
  &.highlight {
    color: var(--on-primary);
    background-color: var(--primary);
    border-radius: 4px;
  }
  a {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const NavTab = ({ id, isActive }) => {
  const link = getNavTabLink(id)
  const iconType = getNavTabIconType(id)
  return (
    <StyledNavTab className={isActive ? 'highlight' : ''}>
      <Link href={link}>
        <a>
          <Icon type={iconType} title={`Go to ${id} page`} />
        </a>
      </Link>
    </StyledNavTab>
  )
}

const NavTabsList = styled.ul`
  display: flex;
`
const Nav = () => {
  const { activeTab, tabs } = useSelector(({ nav }) => nav)
  return (
    <nav>
      <NavTabsList>
        {tabs.map((tab) => (
          <NavTab key={tab} id={tab} isActive={tab === activeTab} />
        ))}
      </NavTabsList>
    </nav>
  )
}

export default Nav
