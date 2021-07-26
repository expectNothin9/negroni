import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import Halo from './Halo'

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vmin;
  height: 40vmin;
  border-radius: 50%;
  background-color: var(--surface);
  position: relative;
  img.logo {
    width: 32vmin;
    height: 32vmin;
  }
  h1.brand-name {
    position: absolute;
    top: 35.3vmin;
    width: 36vmin;
    padding-top: 1.5vmin;
    border-top: 0.5vmin solid var(--on-surface);
    background-color: var(--background);
    color: var(--on-surface);
    font-size: 5vmin;
    font-weight: bold;
    text-align: center;
  }
  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: logo-float infinite 3s ease-in-out;
    }
  }
  @keyframes logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(1.5vmin);
    }
    100% {
      transform: translateY(0);
    }
  }
`
const Logo = () => {
  const theme = useSelector(({ page }) => page.theme)
  const logoSrc = theme === 'light' ? '/img/agln_dark.svg' : '/img/agln_light.svg'
  return (
    <LogoBox>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo" src={logoSrc} alt="AGEDLION Logo" />
      <h1 className="brand-name">AGEDLION</h1>
    </LogoBox>
  )
}
const StyledHome = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HomeIndex = () => (
  <StyledHome>
    {/* <Halo /> */}
    <Logo />
  </StyledHome>
)

export default HomeIndex
