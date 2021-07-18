import { useSelector } from 'react-redux'
import styled from 'styled-components'

// import Halo from './Halo'

const LogoBox = styled.div`
  display: inline-block;
  width: 35vmin;
  height: 35vmin;
  border-radius: 50%;
  background: url(${(props) => props.logoSrc}) var(--surface);
  background-position: center;
  background-size: 32vmin 32vmin;
  background-repeat: no-repeat;
  box-shadow: 0 0 3vmin var(--shadow);
  @media (prefers-reduced-motion: no-preference) {
    animation: logo-float infinite 3s ease-in-out;
  }
  @keyframes logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
const Logo = () => {
  const theme = useSelector(({ pages }) => pages.theme)
  const logoSrc = theme === 'light' ? '/img/agln_000000.png' : '/img/agln_ffffff.png'
  return <LogoBox logoSrc={logoSrc} />
}
const StyledHome = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`
const HomeIndex = () => (
  <StyledHome>
    {/* <Halo /> */}
    <Logo />
  </StyledHome>
)

export default HomeIndex
