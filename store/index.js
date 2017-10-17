import { createStore, applyMiddleware } from "redux"
import withRedux from "next-redux-wrapper"
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import reducer from 'store/reducer'

// Setup
const middleWare = [];
// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
})
middleWare.push(loggerMiddleware)

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middleWare))(createStore)

const makeStore = (initialState, options) => {
  return createStoreWithMiddleware(reducer, initialState)
}

export default makeStore
