export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCEEDED = "FETCH_POSTS_SUCCEEDED";
export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_SUCCEEDED = "FETCH_POST_SUCCEEDED";

export function fetchPosts() {
  return { type: FETCH_POSTS };
}

export function fetchPost(id) {
  return { type: FETCH_POST, payload: id };
}
