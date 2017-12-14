import { all } from "redux-saga/effects";

import postSagas from "store/posts/sagas";

export default function* rootSaga(services = {}) {
  yield all([postSagas()]);
}
