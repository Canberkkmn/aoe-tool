import { all, fork } from "redux-saga/effects";
import filterSaga from "./newFilterSaga";
import unitSaga from "./newUnitSaga";

function* rootSaga() {
  yield all([fork(filterSaga), fork(unitSaga)]);
}

export default rootSaga;
