import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import UniHeader from '../components/UniHeader'
import { initAuthor } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initAuthor({
      nav: {
        activeTab: 'author'
      }
    })
  )
})

const Author = () => (
  <Main>
    <Head>
      <title>Author - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniHeader />
  </Main>
)

export default Author
