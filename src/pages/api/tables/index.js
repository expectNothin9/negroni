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
      const getUserResp = await gqlGetUser({ userId })
      const user = getUserResp.data.getUser
      const tableVariable = {
        owner: user,
        members: [user]
      }
      const addTableResp = await gqlAddTable({ table: tableVariable })
      const table = addTableResp.data.addTable
      return res.status(200).json({ table })
    } catch (e) {
      return res.status(200).json({ error: e })
    }
  }

  res.status(404).json({ error: new Error('Not found.') })
}

export default handler
