const { LINE_LOGIN_CHANNEL_ID, LINE_LOGIN_CHANNEL_SECRET, LINE_LOGIN_CHANNEL_CALLBACK_URL } =
  process.env

const handler = async (req, res) => {
  // https://developers.line.biz/zh-hant/docs/line-login/integrate-line-login/#receiving-the-authorization-code-or-error-response-with-a-web-app
  const { query } = req
  if (query.state === 'PLAY_TAKE6') {
    const { code, error } = query
    if (code) {
      try {
        const response = await fetch('https://api.line.me/oauth2/v2.1/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: LINE_LOGIN_CHANNEL_CALLBACK_URL,
            client_id: LINE_LOGIN_CHANNEL_ID,
            client_secret: LINE_LOGIN_CHANNEL_SECRET
          })
        }).then((resp) => resp.json())
        res.status(200).json({ tokenResponse: response })
      } catch (e) {
        res.status(200).json({ error: e })
      }
    } else {
      res.status(200).json({ error })
    }
  } else {
    res.status(200).json({ query })
  }
}

export default handler
