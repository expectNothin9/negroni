import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import Nav from '../components/Nav'
import HomeIndex from '../components/home/Index'
import { initHome } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initHome({
      nav: {
        activeTab: 'home',
        isDisplayed: false,
        isExpanded: true
      }
    })
  )
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
