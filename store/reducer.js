import { combineReducers } from 'redux'

import postsReducer from './posts/reducer'

const reducers = {
  posts: postsReducer
}

export default combineReducers(reducers)
