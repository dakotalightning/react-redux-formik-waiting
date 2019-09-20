import { all, put, takeEvery } from "redux-saga/effects";
import { constants } from "./reducers/index";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* loginSaga({ password }) {
  yield delay(2500);
  if (password === "password") {
    // api logic and password checks
    yield put({ type: constants.LOGIN_SUCCESS });
  } else {
    yield put({ type: constants.LOGIN_FAIL });
  }
}

export default function* rootSaga() {
  yield all([yield takeEvery(constants.LOGIN, loginSaga)]);
}
