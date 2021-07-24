import Head from 'next/head'

import { nextReduxWrapper } from '../../app/store'
import Main from '../../components/Main'
import UniHeader from '../../components/UniHeader'
import Take6Index from '../../components/games/Take6'
import { initGames } from '../../features/pageSlice'
import { fetchTable } from '../../features/asyncThunks'

export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) => async (_context) => {
    store.dispatch(
      initGames({
        nav: {
          activeTab: 'games'
        }
      })
    )
    await store.dispatch(fetchTable({ tableId: 1 }))
  }
)

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
