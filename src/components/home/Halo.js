import styled from 'styled-components'

const HaloBox = styled.div`
  transform-style: preserve-3d;
  animation: halo-spin 9s linear infinite;
  z-index: 1;
  span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--secondary-dark);
    color: var(--on-secondary-dark);
    font-size: 5vmin;
    font-weight: bold;
    transform-origin: center;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7vmin;
    height: 7vmin;
    transform: rotateY(calc(var(--i) * calc(360deg / 32))) translateZ(calc(30vmin))
      translateY(18vmin);
    border-top: 1vmin solid var(--secondary);
    border-bottom: 1vmin solid var(--secondary);
  }
  span:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-dark);
    transform: translateZ(-2px);
  }
  @keyframes halo-spin {
    0% {
      transform: perspective(1500px) rotateY(360deg) rotateX(10deg);
    }
    100% {
      transform: perspective(1500px) rotateY(0deg) rotateX(10deg);
    }
  }
`
const HALO_LETTERS = [
  { id: '1', char: '♠︎' },
  { id: '2', char: '' },
  { id: '3', char: 'A' },
  { id: '4', char: 'G' },
  { id: '5', char: 'E' },
  { id: '6', char: 'D' },
  { id: '7', char: 'L' },
  { id: '8', char: 'I' },
  { id: '9', char: 'O' },
  { id: '10', char: 'N' },
  { id: '11', char: '' },
  { id: '12', char: '♣︎' },
  { id: '13', char: '' },
  { id: '14', char: '' },
  { id: '15', char: '' },
  { id: '16', char: '' },
  { id: '17', char: '' },
  { id: '18', char: '' },
  { id: '19', char: '♥︎' },
  { id: '20', char: '' },
  { id: '21', char: 'A' },
  { id: '22', char: 'G' },
  { id: '23', char: 'L' },
  { id: '24', char: 'N' },
  { id: '25', char: '' },
  { id: '26', char: '♦︎' },
  { id: '27', char: '' },
  { id: '28', char: '' },
  { id: '29', char: '' },
  { id: '30', char: '' },
  { id: '31', char: '' },
  { id: '32', char: '' }
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

export default Halo
