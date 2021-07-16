/**
 * @param {string} tabId
 * @returns {string}
 */
export const getNavTabLink = (tabId) => {
  switch (tabId) {
    case 'home':
      return '/'
    case 'profile':
      return '/profile'
    case 'author':
      return '/author'
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
    case 'profile':
      return 'account_circle'
    case 'author':
      return 'construction'
    default:
      return 'thumb_down_alt'
  }
}
