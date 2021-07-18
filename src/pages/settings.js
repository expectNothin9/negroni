import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import Nav from '../components/Nav'
import SettingsIndex from '../components/settings/Index'
import { initSettings } from '../features/pagesSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async (_context) => {
  store.dispatch(
    initSettings({
      nav: {
        activeTab: 'settings',
        isExpanded: false
      }
    })
  )
})

const Settings = () => (
  <Main>
    <Head>
      <title>Settings - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <SettingsIndex />
  </Main>
)

export default Settings
