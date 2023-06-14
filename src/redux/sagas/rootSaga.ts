import { all, fork } from "redux-saga/effects";
import filterSaga from "./filterSaga";
import unitSaga from "./unitSaga";

function* rootSaga() {
  yield all([fork(filterSaga), fork(unitSaga)]);
}

export default rootSaga;
