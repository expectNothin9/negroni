import React, { useState, useEffect, useCallback } from 'react'
import { useScript } from './hooks'

const PusherChannel = () => {
  const [pusherScriptLoaded, setPusherScriptLoaded] = useState(false)
  const onPusherScripteLoaded = useCallback(() => setPusherScriptLoaded(true), [])
  useScript('https://js.pusher.com/7.0/pusher.min.js', onPusherScripteLoaded)

  useEffect(() => {
    if (pusherScriptLoaded === true) {
      console.log('Pusher script loaded.')
    }
  }, [pusherScriptLoaded])

  return <div id="pusher-channel" />
}

export default PusherChannel
