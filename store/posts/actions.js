export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCEEDED = 'FETCH_POSTS_SUCCEEDED'

export function fetchPosts() {
  return { type: FETCH_POSTS }
}
