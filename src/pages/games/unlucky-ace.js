import Head from 'next/head'
import Cookies from 'cookies'
import dayjs from 'dayjs'

import { nextReduxWrapper } from '../../app/store'
import Main from '../../components/Main'
import UniHeader from '../../components/UniHeader'
import UnluckyAceIndex from '../../components/games/UnluckyAce'

import { fetchUser } from '../../features/asyncThunks'
import { initGames } from '../../features/pageSlice'

const { COOKIES_KEY } = process.env
export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) => async (context) => {
    const { req, res } = context
    const cookies = new Cookies(req, res, { keys: [COOKIES_KEY] })
    let selfUserId = null

    // check login is valid
    const t = cookies.get('t', { signed: true })
    console.log(`cookies.t: ${t}`)
    let loginValid = false
    if (t) {
      const cookiesDate = dayjs(t)
      const now = dayjs()
      console.log(`now.diff(cookieDate, 'day'): ${now.diff(cookiesDate, 'day')}`)
      if (now.diff(cookiesDate, 'day') < 7) {
        loginValid = true
      }
    }

    // fetch login user info from database
    if (loginValid) {
      const userId = cookies.get('userId', { signed: true })
      selfUserId = userId
      await store.dispatch(fetchUser({ userId }))
    }

    store.dispatch(
      initGames({
        nav: {
          activeTab: 'games'
        },
        user: {
          selfUserId
        }
      })
    )
  }
)

const UnluckyAce = () => (
  <Main>
    <Head>
      <title>Unlucky ACE! - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniHeader />
    <UnluckyAceIndex />
  </Main>
)

export default UnluckyAce
