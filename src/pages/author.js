import Head from 'next/head'
import { useDispatch } from 'react-redux'

import Nav from '../components/Nav'
import { initAuthor } from '../features/pagesSlice'

export async function getStaticProps(context) {
  return {
    // will be passed to the page component as props
    props: {
      nav: {
        activeTab: 'author',
        isExpanded: false
      }
    }
  }
}

const Author = ({ nav }) => {
  const dispatch = useDispatch()
  dispatch(initAuthor({ nav }))

  return (
    <main>
      <Head>
        <title>Author - AGEDLION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </main>
  )
}

export default Author
