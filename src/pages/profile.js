import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import UniHeader from '../components/UniHeader'
import { initProfile } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initProfile({
      nav: {
        activeTab: 'profile'
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
    <UniHeader />
  </Main>
)

export default Profile
