import { changeTheme } from './pageSlice'
import { fetchCreateTable } from './asyncThunks'
import { isBrowser } from '../utils'

const applicationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case changeTheme.type:
      if (isBrowser()) {
        window.localStorage.setItem('AGLN_THEME', action.payload.theme)
      }
      break
    case fetchCreateTable.fulfilled.type: {
      if (isBrowser()) {
        const {
          meta: {
            arg: { gameType }
          },
          payload: {
            table: { id: tableId }
          }
        } = action
        window.location.href = `/tables/${tableId}?gameType=${gameType}`
      }
      break
    }
    default:
  }
  return next(action)
}

export default applicationMiddleware
