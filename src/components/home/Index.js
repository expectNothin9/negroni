import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HaloBox = styled.div`
  transform-style: preserve-3d;
  animation: halo-spin 7s linear infinite;
  z-index: 1;
  span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--secondary-dark);
    color: var(--on-secondary-dark);
    font-size: 24px;
    font-weight: bold;
    transform-origin: center;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 40px;
    padding: 6px 0;
    transform: rotateY(calc(var(--i) * calc(360deg / 28))) translateZ(120px) translateY(-56px);
    border-top: 4px solid var(--secondary);
    border-bottom: 4px solid var(--secondary);
  }
  span:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-dark);
    transform: translateZ(-5px);
  }
  @keyframes halo-spin {
    0% {
      transform: perspective(1000px) rotateY(360deg) rotateX(15deg);
    }
    100% {
      transform: perspective(1000px) rotateY(0deg) rotateX(15deg);
    }
  }
  @media only screen and (max-width: 428px) {
    span {
      font-size: 20px;
      width: 20px;
      height: 36px;
      transform: rotateY(calc(var(--i) * calc(360deg / 28))) translateZ(80px) translateY(-52px);
    }
  }
`
const HALO_LETTERS = [
  { id: '1', char: 'A' },
  { id: '2', char: 'G' },
  { id: '3', char: 'E' },
  { id: '4', char: 'D' },
  { id: '5', char: 'L' },
  { id: '6', char: 'I' },
  { id: '7', char: 'O' },
  { id: '8', char: 'N' },
  { id: '9', char: '' },
  { id: '10', char: '' },
  { id: '11', char: '' },
  { id: '12', char: '' },
  { id: '13', char: '' },
  { id: '14', char: '' },
  { id: '15', char: '' },
  { id: '16', char: '' },
  { id: '17', char: 'A' },
  { id: '18', char: 'G' },
  { id: '19', char: 'L' },
  { id: '20', char: 'N' },
  { id: '21', char: '' },
  { id: '22', char: '' },
  { id: '23', char: '' },
  { id: '24', char: '' },
  { id: '25', char: '' },
  { id: '26', char: '' },
  { id: '27', char: '' },
  { id: '28', char: '' }
]
const Halo = () => {
  return (
    <HaloBox className="halo">
      {HALO_LETTERS.map((letter) => (
        <span key={letter.id} style={{ ['--i']: letter.id }}>
          {letter.char}
        </span>
      ))}
    </HaloBox>
  )
}

const LogoBox = styled.div`
  display: inline-block;
  padding: 24px;
  border-radius: 50%;
  background-color: var(--primary-light);
  box-shadow: inset 0 0 20px var(--primary-dark), 0 0 50px var(--primary-light);
  img {
    max-width: 60vmin;
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
  return (
    <LogoBox>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo" src={logoSrc} alt="AGEDLION Logo" />
    </LogoBox>
  )
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
    <Halo />
    <Logo />
  </StyledHome>
)

export default HomeIndex
