import { takeEvery, put, call } from "redux-saga/effects";
import { FilterActionTypes } from "../actionTypes/filterActionType";

function* handleSetAgeFilter() {
  console.log("handleSetAgeFilter saga called");
}

function* filterSaga() {
  yield takeEvery(FilterActionTypes.SET_AGE_FILTER, handleSetAgeFilter);
}

export default filterSaga;
