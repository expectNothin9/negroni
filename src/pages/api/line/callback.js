import Cookies from 'cookies'
import dayjs from 'dayjs'

import { gqlGetUser, gqlAddUser } from '../../../features/asyncThunks'

const {
  LINE_LOGIN_CHANNEL_ID,
  LINE_LOGIN_CHANNEL_SECRET,
  LINE_LOGIN_CHANNEL_CALLBACK_URL,
  COOKIES_KEY
} = process.env

// https://developers.line.biz/zh-hant/docs/line-login/integrate-line-login/#get-access-token
const fetchLineAccessToken = async (code) => {
  const qs = new URLSearchParams()
  qs.append('grant_type', 'authorization_code')
  qs.append('code', code)
  qs.append('redirect_uri', LINE_LOGIN_CHANNEL_CALLBACK_URL)
  qs.append('client_id', LINE_LOGIN_CHANNEL_ID)
  qs.append('client_secret', LINE_LOGIN_CHANNEL_SECRET)
  return await fetch('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.toString()
  }).then((resp) => resp.json())
}

const fetchLineUserProfile = async (id_token) => {
  const qs = new URLSearchParams()
  qs.append('id_token', id_token)
  qs.append('client_id', LINE_LOGIN_CHANNEL_ID)
  console.log('fetchLineUserProfile qs:', qs.toString())
  return await fetch('https://api.line.me/oauth2/v2.1/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.toString()
  }).then((resp) => resp.json())
}

const handler = async (req, res) => {
  // https://developers.line.biz/zh-hant/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app
  const { query } = req
  if (query.state) {
    let originUrl = '/'
    switch (query.state) {
      case 'PLAY_TAKE6':
        originUrl = '/games/take6'
        break
      case 'UNLUCKY_ACE':
        originUrl = '/games/unlucky-ace'
        break
    }

    if (query.error) {
      return res.status(400).json(query)
    }

    try {
      const tokenResp = await fetchLineAccessToken(query.code)
      if (tokenResp.error) {
        return res.status(400).json(tokenResp)
      }
      const profileResp = await fetchLineUserProfile(tokenResp.id_token)
      if (profileResp.error) {
        return res.status(400).json(profileResp)
      }
      const user = {
        id: profileResp.sub,
        name: profileResp.name,
        avatarImage: profileResp.picture
      }
      console.log('user', user)
      const gqlGetUserResp = await gqlAddUser({ user })
      if (gqlGetUserResp.errors) {
        throw new Error(gqlGetUserResp.errors[0].message)
      }

      const cookies = new Cookies(req, res, { keys: [COOKIES_KEY] })
      cookies.set('userId', user.id, { signed: true })
      cookies.set('t', dayjs().format(), { signed: true })
      return res.redirect(originUrl)
    } catch (e) {
      return res.status(200).json({ error: e })
    }
  }

  res.status(200).json(query)
}

export default handler
