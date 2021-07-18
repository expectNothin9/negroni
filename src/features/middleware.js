import { changeTheme, initHome, initProfile, initSettings, initAuthor } from './pagesSlice'
import { isBrowser } from '../utils'

const applicationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case changeTheme.type:
      if (isBrowser()) {
        window.localStorage.setItem('AGLN_THEME', action.payload.theme)
      }
      break
    case initHome.type:
    case initProfile.type:
    case initSettings.type:
    case initAuthor.type:
      if (isBrowser()) {
        const theme = window.localStorage.getItem('AGLN_THEME')
        if (theme && ['light', 'dark'].includes(theme)) {
          store.dispatch(changeTheme({ theme }))
        }
      }
      break
    default:
  }
  return next(action)
}

export default applicationMiddleware
