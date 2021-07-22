import Head from 'next/head'

import { nextReduxWrapper } from '../../app/store'
import Main from '../../components/Main'
import UniHeader from '../../components/UniHeader'
import Take6Index from '../../components/games/Take6'
import { initGames } from '../../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initGames({
      nav: {
        activeTab: 'games'
      }
    })
  )
})

const Take6 = () => (
  <Main>
    <Head>
      <title>Take 6! - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniHeader />
    <Take6Index />
  </Main>
)

export default Take6
