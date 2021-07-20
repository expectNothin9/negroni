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
 * @returns {boolean}
 */
export const isBrowser = () => typeof window !== 'undefined'
