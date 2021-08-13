import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import Icon from './Icon'
import { closeNav, openNav } from '../features/navSlice'

const StyledButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`
const CloseButton = styled(StyledButton)`
  position: absolute;
  top: calc(var(--gap) / 2);
  right: var(--gap);
  z-index: 2;
  background-color: var(--surface);
  color: var(--on-surface);
`
const CloseNavButton = () => {
  const dispatch = useDispatch()
  const handleCloseNav = useCallback(() => dispatch(closeNav()), [dispatch])
  return (
    <CloseButton className="close-nav" type="button" onClick={handleCloseNav}>
      <Icon type="close" title="Close nav" />
    </CloseButton>
  )
}

const NavLinkBox = styled.li`
  .nav-link {
    display: flex;
    align-items: center;
    width: 280px;
    height: 72px;
    padding: var(--gap) calc(var(--gap) * 2);
    margin-bottom: var(--gap);
    background-color: var(--surface);
    font-size: 40px;
    font-family: 'Acme';
    i {
      font-size: 36px;
      margin-right: var(--gap);
    }
  }
  &:nth-child(odd) .nav-link {
    border-top-left-radius: var(--gap);
  }
  &:nth-child(even) .nav-link {
    justify-content: flex-end;
    border-bottom-right-radius: var(--gap);
  }
`
const NavLink = ({ navLink }) => {
  switch (navLink) {
    case '/':
      return (
        <NavLinkBox>
          <Link href={navLink}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link home">
              <Icon type="home" title="Go to home page" />
              Home
            </a>
          </Link>
        </NavLinkBox>
      )
    case '/games':
      return (
        <NavLinkBox>
          <Link href={navLink}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link games">
              <Icon type="casino" title="Go to games page" />
              Games
            </a>
          </Link>
        </NavLinkBox>
      )
    default:
      return null
  }
}
NavLink.propTypes = {
  navLink: PropTypes.string.isRequired
}

const StyledList = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: var(--background);
`
const NavLinksList = ({ navLinks }) => (
  <>
    <CloseNavButton />
    <StyledList>
      {navLinks.map((navLink) => (
        <NavLink key={navLink} navLink={navLink} />
      ))}
    </StyledList>
  </>
)
NavLinksList.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const OpenButton = styled(StyledButton)`
  position: fixed;
  top: calc(var(--gap) / 2);
  left: var(--gap);
  background-color: var(--surface);
  color: var(--on-surface);
`
const OpenNavButton = () => {
  const dispatch = useDispatch()
  const handleOpenNav = useCallback(() => dispatch(openNav()), [dispatch])
  return (
    <OpenButton className="open-nav" type="button" onClick={handleOpenNav}>
      <Icon type="menu" title="Open nav" />
    </OpenButton>
  )
}

const Nav = () => {
  const { active, navLinks } = useSelector(({ nav }) => nav)
  return <nav>{active ? <NavLinksList navLinks={navLinks} /> : <OpenNavButton />}</nav>
}

export default Nav
