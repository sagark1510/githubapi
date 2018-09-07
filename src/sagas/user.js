import {all, call, put, takeLatest, throttle} from 'redux-saga/effects';
import * as types from '../actions/types';
import {fetchCurrentUser, searchUser} from '../api/user';

/**
 * Root todo saga
 */
export function* rootUserSaga() {
  yield all([watchStartUserFetch(), watchStartUsersSearch()]);
}

/** ========== Watchers =============== */

/**
 * watch fetch method
 */
export function* watchStartUserFetch() {
  yield takeLatest(types.FETCH_USER_START, doFetchUser);
}

/**
 * watch search method
 */
export function* watchStartUsersSearch() {
  yield throttle(500, types.SEARCH_USER_START, doSearchUsers);
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

/**
 * doSearchUsers
 */
export function* doSearchUsers({params}) {
  try {
    const list = yield call(searchUser, params);

    yield put({type: types.SEARCH_USER_SUCCESS, list});
  } catch (e) {
    console.log(e);
  }
}
