import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoSlice } from "./reducer/TodoReducer";
import createSagaMiddleware from "redux-saga";
import { testSaga } from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(testSaga);
