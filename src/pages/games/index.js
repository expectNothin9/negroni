import Head from 'next/head'
import Cookies from 'cookies'
import dayjs from 'dayjs'

import { nextReduxWrapper } from '../../app/store'
import Main from '../../components/Main'
import GamesIndex from '../../components/games/Index'

import { fetchUser } from '../../features/asyncThunks'
import { initGames } from '../../features/pageSlice'
import Nav from '../../components/Nav'

const { COOKIES_KEY } = process.env
export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) => async (context) => {
    const { req, res } = context
    const cookies = new Cookies(req, res, { keys: [COOKIES_KEY] })

    // check login is valid
    const userId = cookies.get('userId', { signed: true })
    const t = cookies.get('t', { signed: true })
    console.log(`cookies.userId: ${userId}\ncookies.t: ${t}`)
    let loginValid = false
    if (t) {
      const cookiesDate = dayjs(t)
      const now = dayjs()
      if (now.diff(cookiesDate, 'day') < 7) {
        loginValid = true
      }
    }

    // fetch login user info from database
    if (loginValid) {
      await store.dispatch(fetchUser({ userId }))
    }

    store.dispatch(
      initGames({
        user: {
          selfUserId: userId || null
        }
      })
    )
  }
)

const Games = () => (
  <Main>
    <Head>
      <title>Games - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <GamesIndex />
  </Main>
)

export default Games
