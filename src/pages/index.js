import Head from 'next/head'
import { useDispatch } from 'react-redux'

import Nav from '../components/Nav'
import HomeIndex from '../components/home/Index'
import { initHome } from '../features/pagesSlice'

export async function getStaticProps(context) {
  return {
    // will be passed to the page component as props
    props: {
      nav: {
        activeTab: 'home',
        isDisplayed: false,
        isExpanded: true
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
      <HomeIndex />
    </main>
  )
}

export default Home
