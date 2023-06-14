import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { unitSaga } from "../sagas/unitSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {},
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(unitSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
