const Pusher = require('pusher')

const { PUSHER_APP_ID, NEXT_PUBLIC_PUSHER_KEY, PUSHER_SECRET, NEXT_PUBLIC_PUSHER_CLUSTER } =
  process.env

const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  key: NEXT_PUBLIC_PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true
})

const handler = async (req, res) => {
  const { message } = req.body
  try {
    pusher.trigger('my-channel', 'my-event', { message })
    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e })
  }
}

export default handler
