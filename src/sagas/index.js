import * as testSaga from "./testSaga";
// import * as testSaga2 from "./testSaga2";

export function initSagas(sagaMiddleware) {
  Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  // Object.values(testSaga2).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
