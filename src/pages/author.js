import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import Nav from '../components/Nav'
import { initAuthor } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initAuthor({
      nav: {
        activeTab: 'author',
        isExpanded: false
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
    <Nav />
  </Main>
)

export default Author
