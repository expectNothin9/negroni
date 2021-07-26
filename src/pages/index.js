import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import UniHeader from '../components/UniHeader'
import HomeIndex from '../components/home/Index'
import { initHome } from '../features/pageSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initHome({
      nav: {
        activeTab: 'home'
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
    <UniHeader />
    <HomeIndex />
  </Main>
)

export default Home
