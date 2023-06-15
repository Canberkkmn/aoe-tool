import { takeEvery, put, call } from "redux-saga/effects";
import { FilterActionTypes } from "../actionTypes/filterActionType";

function* handleGetFilterData(action) {
  try {
    yield put({
      type: FilterActionTypes.GET_FILTERS,
      payload: action.payload,
    });
  } catch (error) {
    console.log("handleGetFilterData saga error", error);
  }
}

function* filterSaga() {
  yield takeEvery(FilterActionTypes.SET_AGE_FILTER, handleGetFilterData);
  yield takeEvery(FilterActionTypes.SET_COST_FILTER, handleGetFilterData);
}

export default filterSaga;
