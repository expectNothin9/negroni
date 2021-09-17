import React, { useState, useEffect, useCallback } from 'react'
import { useScript } from './hooks'

const PUSHER_KEY = process.env.NEXT_PUBLIC_PUSHER_KEY
const PUSHER_CLUSTER = process.env.NEXT_PUBLIC_PUSHER_CLUSTER

const PusherChannel = () => {
  const [pusherScriptLoaded, setPusherScriptLoaded] = useState(false)
  const onPusherScripteLoaded = useCallback(() => setPusherScriptLoaded(true), [])
  useScript('https://js.pusher.com/7.0/pusher.min.js', onPusherScripteLoaded)

  useEffect(() => {
    if (pusherScriptLoaded === true) {
      const pusher = new window.Pusher(PUSHER_KEY, {
        cluster: PUSHER_CLUSTER
      })

      const channel = pusher.subscribe('my-channel')
      channel.bind('my-event', (data) => {
        console.log(JSON.stringify(data))
      })
    }
  }, [pusherScriptLoaded])

  return <div id="pusher-channel" />
}

export default PusherChannel
