import { createActions } from 'redux-actions'
import { AUTH } from 'constants'
import WebAPI from 'services/WebAPI'

/**
 * Action Creators
 */
export const actions = createActions({
  // actions.login()
  [AUTH.LOGIN]: WebAPI.login,
  // actions.logout()
  [AUTH.LOGOUT]: WebAPI.logout
})
