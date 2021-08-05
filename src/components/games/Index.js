import Link from 'next/link'
import styled from 'styled-components'

const GamesBox = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--on-background);
`
const GamesIndex = () => {
  return (
    <GamesBox>
      <Link href="/games/unlucky-ace">
        <a>Unlucky ACE!</a>
      </Link>
    </GamesBox>
  )
}

export default GamesIndex
