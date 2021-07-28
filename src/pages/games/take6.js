import Head from 'next/head'
import Cookies from 'cookies'
import dayjs from 'dayjs'

import { nextReduxWrapper } from '../../app/store'
import { getLineAuthorizeUrl } from '../../utils'
import Main from '../../components/Main'
import UniHeader from '../../components/UniHeader'
import Take6Index from '../../components/games/Take6'
// import { initGames } from '../../features/pageSlice'
// import { fetchTable } from '../../features/asyncThunks'

const { COOKIES_KEY } = process.env

export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) => async (context) => {
    const { req, res } = context
    const cookies = new Cookies(req, res, { keys: [COOKIES_KEY] })
    const t = cookies.get('t', { signed: true })
    const cookiesDate = dayjs(t)
    const now = dayjs()
    console.log(`cookies.t: ${t}, now.diff(cookieDate, 'day'): ${now.diff(cookiesDate, 'day')}`)
    // TODO: use userId, name if cookies date is within 7 days
    return {
      redirect: {
        destination: getLineAuthorizeUrl('PLAY_TAKE6'),
        statusCode: 302
      }
    }

    // store.dispatch(
    //   initGames({
    //     nav: {
    //       activeTab: 'games'
    //     }
    //   })
    // )
    // await store.dispatch(fetchTable({ tableId: 1 }))
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
