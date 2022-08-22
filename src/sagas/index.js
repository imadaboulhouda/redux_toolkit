import { takeLatest, put } from "redux-saga/effects";
import { fetchData } from "../actions/TodoAction";
import { sagaActions } from "./actions";

export function* fetchDataSaga() {
  try {
    const json = yield fetch(
      "https://jsonplaceholder.typicode.com/users/1/todosx"
    ).then((response) => response.json());

    yield put(fetchData(json));
  } catch (e) {
    yield put({ type: sagaActions.FETCH_DATA_SAGA_ERROR });
  }
}
export function* testSaga() {
  yield takeLatest(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
