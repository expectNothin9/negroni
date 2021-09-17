import { useEffect } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const useScript = (scriptUrl, onLoad) => {
  useEffect(() => {
    const script = document.createElement('script')
    document.body.appendChild(script)
    // https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag
    if (onLoad) {
      script.onload = onLoad
    }
    script.src = scriptUrl
    script.async = true

    return () => {
      document.body.removeChild(script)
    }
  }, [scriptUrl, onLoad])
}
