import { FETCH_POSTS_SUCCEEDED } from './actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCEEDED:
      return action.payload
      break;
    default:
      return state
      break;
  }
}
