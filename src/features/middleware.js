import { changeTheme } from './pagesSlice'
import { isBrowser } from '../utils'

const applicationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case changeTheme.type:
      if (isBrowser()) {
        window.localStorage.setItem('AGLN_THEME', action.payload.theme)
      }
      break
    default:
  }
  return next(action)
}

export default applicationMiddleware
