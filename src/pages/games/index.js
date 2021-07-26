import Head from 'next/head'

import { nextReduxWrapper } from '../../app/store'
import Main from '../../components/Main'
import UniHeader from '../../components/UniHeader'
import GamesIndex from '../../components/games/Index'
import { initGames } from '../../features/pageSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initGames({
      nav: {
        activeTab: 'games'
      }
    })
  )
})

const Games = () => (
  <Main>
    <Head>
      <title>Games - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniHeader />
    <GamesIndex />
  </Main>
)

export default Games
