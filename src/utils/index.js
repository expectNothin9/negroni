/**
 * @param {string} tabId
 * @returns {string}
 */
export const getNavTabLink = (tabId) => {
  switch (tabId) {
    case 'home':
      return '/'
    case 'games':
      return '/games'
    case 'settings':
      return '/settings'
    case 'builders':
      return '/builders'
    default:
      return '/'
  }
}

/**
 * @param {string} tabId
 * @returns {string}
 */
export const getNavTabIconType = (tabId) => {
  switch (tabId) {
    case 'home':
      return 'home'
    case 'games':
      return 'emoji_events'
    case 'settings':
      return 'settings'
    case 'builders':
      return 'construction'
    default:
      return 'thumb_down_alt'
  }
}

/**
 * @param {string} state
 * @returns {string}
 */
export const getApiLineAuthorizeUrl = (state) => {
  const qs = new URLSearchParams()
  qs.append('state', state)
  return `/api/line/authorize?${qs.toString()}`
}

/**
 * @returns {boolean}
 */
export const isBrowser = () => typeof window !== 'undefined'

/**
 * @param {Object[]} array
 * @returns {Object[]}
 */
export const shuffle = (array) => {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}
