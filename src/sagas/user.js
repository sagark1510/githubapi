import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import * as types from '../actions/types';
import {fetchUser} from '../api/user';

/**
 * Root todo saga
 */
export function* rootUserSaga() {
  yield all([watchStartUserFetch()]);
}

/** ========== Watchers =============== */

/**
 * watch fetch method
 */
export function* watchStartUserFetch() {
  yield takeLatest(types.FETCH_USER_START, doFetchUser);
}

/** =========== workers ============== */
/**
 * doFetchUser
 */
export function* doFetchUser({params}) {
  try {
    const tasks = yield call(fetchUser, params);

    yield put({type: types.FETCH_USER_SUCCESS, tasks});
  } catch (e) {
    console.log(e);
  }
}
