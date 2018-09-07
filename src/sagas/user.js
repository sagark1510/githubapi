import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import * as types from '../actions/types';
import {fetchCurrentUser} from '../api/user';

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
    const user = yield call(fetchCurrentUser, params);

    yield put({type: types.FETCH_USER_SUCCESS, user});
  } catch (e) {
    console.log(e);
  }
}
