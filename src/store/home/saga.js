import { call, put, takeLatest } from "redux-saga/effects";
import { get, post } from "../../utils/axios";
import { getHomeDataFailed, getHomeDataSuccess } from "./actions";
import { GET_HOME_DATA_REQUEST } from "./actionTypes";

/**
 * Get All Post Api
 */
function* getHomePageContent() {
  try {
    const response = yield call(get, `/posts`);
    // toastr.success(response?.message);
    yield put(getHomeDataSuccess(response));
  } catch (error) {
    // toastr.error(error?.response?.data?.message);
    yield put(getHomeDataFailed(error));
  }
}

function* contentSaga() {
  yield takeLatest(GET_HOME_DATA_REQUEST, getHomePageContent);
}

export default contentSaga;
