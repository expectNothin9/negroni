const { LINE_LOGIN_CHANNEL_ID, LINE_LOGIN_CHANNEL_SECRET, LINE_LOGIN_CHANNEL_CALLBACK_URL } =
  process.env

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
  if (query.state === 'PLAY_TAKE6') {
    const { code, error, error_description } = query
    if (error) {
      return res.status(200).json({ error, error_description })
    }

    try {
      const tokenResponse = await fetchLineAccessToken(code)
      console.log('tokenResponse', tokenResponse)
      const profileResponse = await fetchLineUserProfile(tokenResponse.id_token)
      return res.status(200).json({ profileResponse })
    } catch (e) {
      return res.status(200).json({ error: e })
    }
  }
  res.status(200).json({ query })
}

export default handler
