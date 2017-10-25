import { FETCH_POSTS_SUCCEEDED, FETCH_POST_SUCCEEDED } from 'store/posts/actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCEEDED:
      return action.payload
      break;
    case FETCH_POST_SUCCEEDED:
      return {...state, currentPost: action.payload}
      break;
    default:
      return state
      break;
  }
}
