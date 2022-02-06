import { delay, take, put, call } from "redux-saga/effects";

function double(input) {
  return input * 2;
}

export function* testSaga() {
  while (true) {
    console.log(" say hi to saga function");
    const state = yield take("TEST_MESSAGE");
    const res1 = yield call(double, 2);
    const res2 = yield double(3);
    console.log(res1, res2);
    console.log("finished saga", state);
  }
}

export function* dispatchTest() {
  yield delay(10000);
  yield put({ type: "TEST_MESSAGE", payload: 10000 });
}

export function* count() {
  yield 1;
  yield 2; 
  yield 3;
  yield 4;
  yield 5;
}
