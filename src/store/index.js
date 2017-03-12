import reducers from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(promiseMiddleware)
  )
)

export default store
