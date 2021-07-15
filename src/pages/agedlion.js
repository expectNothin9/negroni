import Head from 'next/head'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 500px;
  }
  h1 {
    color: ${({ theme }) => theme.palette.primary};
  }
`

const Agedlion = () => {
  return (
    <main>
      <Head>
        <title>AGEDLION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <img className='logo' src="/agln_000000.png" alt="AGEDLION Logo"/>
        <h1>AGEDLION</h1>
      </Header>
    </main>
  )
}

export default Agedlion
