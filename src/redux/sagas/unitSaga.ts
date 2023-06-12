// src/sagas/counterSaga.ts
import { takeEvery, put } from 'redux-saga/effects';
import { getData } from '../actions/unitActions';

function* handleGetData() {
  yield put(getData());
}

export function* unitSaga() {
  yield takeEvery('GET_UNIT_DATA', handleGetData);
}
