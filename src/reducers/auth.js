import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { AUTH } from '../constants'

/**
 * Initial state
 */
export const initialState = Immutable.fromJS({ isAuth: false })

/**
 * Reducer domain that handles authentication & authorization.
 **/
export default createReducer(initialState, {
  [AUTH.LOGIN]: (state, action) => state.merge({
    isAuth: true,
    token: action.payload.token
  }),

  [AUTH.LOGOUT]: (domain) => domain.merge({
    isAuth: false,
    current_identity: {},
    token: undefined
  })
})
