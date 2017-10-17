import {delay} from 'redux-saga'
import { takeLatest, fork, call, put } from 'redux-saga/effects'

import api from 'services/api'
import { FETCH_POSTS, FETCH_POSTS_SUCCEEDED } from './actions'

function* testSaga(action) {
  const posts = yield call(api.fetchAllPosts)
  yield put({type: FETCH_POSTS_SUCCEEDED, payload: posts.data})
}

function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, testSaga)
}

export default function* postsSagas() {
  yield fork(watchFetchPosts)
}
