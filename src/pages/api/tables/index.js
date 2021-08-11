import Cookies from 'cookies'

import { gqlGetUser, gqlAddTable } from '../../../features/asyncThunks'

const { COOKIES_KEY } = process.env

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const cookies = new Cookies(req, res, { keys: [COOKIES_KEY] })
    const userId = cookies.get('userId', { signed: true })
    if (!userId) {
      return res.status(400).json({ error: new Error('Missing userId.') })
    }

    try {
      const gqlGetUserResp = await gqlGetUser({ userId })
      const user = gqlGetUserResp.data.getUser
      const tableVariable = {
        owner: user,
        members: [user]
      }
      const gqlAddTableResp = await gqlAddTable({ table: tableVariable })
      if (gqlAddTableResp.errors) {
        throw new Error(gqlAddTableResp.errors[0].message)
      }
      return res.status(200).json({ table: gqlAddTableResp.data.addTable.table[0] })
    } catch (e) {
      console.log(e)
      return res.status(200).json({ error: e })
    }
  }

  return res.status(404).json({ error: new Error('Not found.') })
}

export default handler
