import Head from 'next/head'
import { useDispatch } from 'react-redux'

import Main from '../components/Main'
import Nav from '../components/Nav'
import SettingsIndex from '../components/settings/Index'
import { initSettings } from '../features/pagesSlice'

export async function getStaticProps(context) {
  return {
    // will be passed to the page component as props
    props: {
      nav: {
        activeTab: 'settings',
        isExpanded: false
      }
    }
  }
}

const Settings = ({ nav }) => {
  const dispatch = useDispatch()
  dispatch(initSettings({ nav }))

  return (
    <Main>
      <Head>
        <title>Settings - AGEDLION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SettingsIndex />
    </Main>
  )
}

export default Settings
