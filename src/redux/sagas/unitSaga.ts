import { takeEvery, put } from "redux-saga/effects";
import { UnitActionTypes } from "../actionTypes/unitActionType";
import initialUnitData from "../../data/units/data.json";

function* handleGetInitialUnitData() {
  try {
    yield put({
      type: UnitActionTypes.SET_INITIAL_UNIT_DATA,
      payload: initialUnitData.units,
    });
  } catch (error) {
    console.log("handleGetInitialUnitData saga error", error);
  }
}

function* unitSaga() {
  yield takeEvery(
    UnitActionTypes.GET_INITIAL_UNIT_DATA,
    handleGetInitialUnitData
  );
}

export default unitSaga;
