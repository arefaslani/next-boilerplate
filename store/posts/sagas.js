import { takeLatest, fork, call, put } from "redux-saga/effects";

import api from "services/api";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCEEDED,
  FETCH_POST,
  FETCH_POST_SUCCEEDED
} from "store/posts/actions";

function* fetchPosts(action) {
  const posts = yield call(api.fetchAllPosts);
  yield put({ type: FETCH_POSTS_SUCCEEDED, payload: posts.data });
}

function* fetchPost({ payload }) {
  const post = yield call(api.fetchPost, payload);
  yield put({ type: FETCH_POST_SUCCEEDED, payload: post.data });
}

function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

function* watchFetchPost() {
  yield takeLatest(FETCH_POST, fetchPost);
}

export default function* postsSagas() {
  yield fork(watchFetchPosts);
  yield fork(watchFetchPost);
}
