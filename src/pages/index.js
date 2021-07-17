import Head from 'next/head'
import { useDispatch } from 'react-redux'

import Nav from '../components/Nav'
import { initHome } from '../features/pagesSlice'

export async function getStaticProps(context) {
  return {
    // will be passed to the page component as props
    props: {
      nav: {
        activeTab: 'home'
      }
    }
  }
}

const Home = ({ nav }) => {
  const dispatch = useDispatch()
  dispatch(initHome({ nav }))

  return (
    <main>
      <Head>
        <title>AGEDLION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </main>
  )
}

export default Home
