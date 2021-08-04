const { LINE_LOGIN_CHANNEL_ID, LINE_LOGIN_CHANNEL_CALLBACK_URL } = process.env

const handler = async (req, res) => {
  const { query } = req
  const qs = new URLSearchParams()
  qs.append('response_type', 'code')
  qs.append('client_id', LINE_LOGIN_CHANNEL_ID)
  qs.append('redirect_uri', LINE_LOGIN_CHANNEL_CALLBACK_URL)
  qs.append('state', query.state)
  qs.append('scope', 'profile openid')
  // for Reply attack protection, https://en.wikipedia.org/wiki/Replay_attack
  // qs.append('nonce', '09876xyz')
  res.status(302).redirect(`https://access.line.me/oauth2/v2.1/authorize?${qs.toString()}`)
}

export default handler
