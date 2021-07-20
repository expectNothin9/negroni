import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import UniHeader from '../components/UniHeader'
import { initBuilders } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initBuilders({
      nav: {
        activeTab: 'builders'
      }
    })
  )
})

const Builders = () => (
  <Main>
    <Head>
      <title>Builders - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniHeader />
  </Main>
)

export default Builders
