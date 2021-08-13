import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import BuildersIndex from '../components/builders/Index'
import { initBuilders } from '../features/pageSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async () => {
  store.dispatch(initBuilders())
})

const Builders = () => (
  <Main>
    <Head>
      <title>Builders - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BuildersIndex />
  </Main>
)

export default Builders
