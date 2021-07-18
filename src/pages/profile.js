import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import Nav from '../components/Nav'
import { initProfile } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initProfile({
      nav: {
        activeTab: 'profile',
        isExpanded: false
      }
    })
  )
})

const Profile = () => (
  <Main>
    <Head>
      <title>Profile - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
  </Main>
)

export default Profile
