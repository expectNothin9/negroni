import Head from 'next/head'
import Cookies from 'cookies'
import dayjs from 'dayjs'

import { nextReduxWrapper } from '../../app/store'
import { getApiLineAuthorizeUrl } from '../../utils'
import Main from '../../components/Main'
import TableIndex from '../../components/tables/TableId'
import { initGames } from '../../features/pageSlice'
import { fetchTable } from '../../features/asyncThunks'

const { COOKIES_KEY } = process.env
export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) => async (context) => {
    let needLogin = false
    const {
      req,
      res,
      query: { tableId }
    } = context

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
      return {
        redirect: {
          destination: getApiLineAuthorizeUrl({
            state: `TABLE_${tableId}`
          }),
          statusCode: 302
        }
      }
    }

    const selfUserId = cookies.get('userId', { signed: true })
    // TODO: check user is allowed to join or not
    await store.dispatch(fetchTable({ tableId }))
    store.dispatch(
      initGames({
        user: {
          selfUserId
        }
      })
    )
    return true
  }
)

const Take6 = () => (
  <Main>
    <Head>
      <title>Table - AGEDLION</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TableIndex />
  </Main>
)

export default Take6
