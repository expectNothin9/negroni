import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import HomeIndex from '../components/home/Index'
import { initHome } from '../features/pageSlice'
import Nav from '../components/Nav'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async () => {
  store.dispatch(initHome())
})

const Home = () => (
  <Main>
    <Head>
      <title>AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <HomeIndex />
  </Main>
)

export default Home
