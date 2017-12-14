import { combineReducers } from "redux";

import postsReducer from "store/posts/reducer";

const reducers = {
  posts: postsReducer
};

export default combineReducers(reducers);
