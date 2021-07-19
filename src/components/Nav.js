import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import Icon from './Icon'
import { getNavTabLink, getNavTabIconType } from '../utils'

const StyledNavTab = styled.li`
  a {
    margin: 0 6px;
    color: var(--on-surface);
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.highlight a {
    color: var(--primary);
    i {
      font-size: 36px;
    }
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
