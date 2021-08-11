import Head from 'next/head'

import { nextReduxWrapper } from '../app/store'
import Main from '../components/Main'
import UniHeader from '../components/UniHeader'
import SettingsIndex from '../components/settings/Index'
import { initSettings } from '../features/pageSlice'

export const getStaticProps = nextReduxWrapper.getStaticProps((store) => async () => {
  store.dispatch(
    initSettings({
      nav: {
        activeTab: 'settings'
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
    <UniHeader />
    <SettingsIndex />
  </Main>
)

export default Settings
