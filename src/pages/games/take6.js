import Head from 'next/head'
import Cookies from 'cookies'
import dayjs from 'dayjs'

import { nextReduxWrapper } from '../../app/store'
import { getLineAuthorizeUrl } from '../../utils'
import Main from '../../components/Main'
import UniHeader from '../../components/UniHeader'
import Take6Index from '../../components/games/Take6'
import { initGames } from '../../features/pageSlice'
import { fetchTable } from '../../features/asyncThunks'

const { COOKIES_KEY } = process.env

export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) => async (context) => {
    let needLogin = false
    const { req, res } = context
    const cookies = new Cookies(req, res, { keys: [COOKIES_KEY] })
    const t = cookies.get('t', { signed: true })
    console.log(`cookies.t: ${t}`)
    if (!t) {
      needLogin = true
    } else {
      const cookiesDate = dayjs(t)
      const now = dayjs()
      console.log(`now.diff(cookieDate, 'day'): ${now.diff(cookiesDate, 'day')}`)
      if (now.diff(cookiesDate, 'day') > 7) {
        needLogin = true
      }
    }

    if (needLogin) {
      const { LINE_LOGIN_CHANNEL_ID, LINE_LOGIN_CHANNEL_CALLBACK_URL } = process.env
      return {
        redirect: {
          destination: getLineAuthorizeUrl({
            state: 'PLAY_TAKE6',
            clientId: LINE_LOGIN_CHANNEL_ID,
            redirectUri: LINE_LOGIN_CHANNEL_CALLBACK_URL
          }),
          statusCode: 302
        }
      }
    }

    store.dispatch(
      initGames({
        nav: {
          activeTab: 'games'
        }
      })
    )
    await store.dispatch(fetchTable({ tableId: 1 }))
  }
)

const Take6 = () => (
  <Main>
    <Head>
      <title>Take 6! - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniHeader />
    <Take6Index />
  </Main>
)

export default Take6
