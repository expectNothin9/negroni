import Head from 'next/head'
import { useDispatch } from 'react-redux'

import Nav from '../components/Nav'
import { initProfile } from '../features/pagesSlice'

export async function getStaticProps(context) {
  return {
    // will be passed to the page component as props
    props: {
      nav: {
        activeTab: 'profile',
        isExpanded: false
      }
    }
  }
}

const Profile = ({ nav }) => {
  const dispatch = useDispatch()
  dispatch(initProfile({ nav }))

  return (
    <main>
      <Head>
        <title>Profile - AGEDLION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </main>
  )
}

export default Profile
