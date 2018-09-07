import {all} from 'redux-saga/effects';
import {rootUserSaga} from './user';
/**
 * root saga
 */
export default function* rootSaga() {
  yield all([rootUserSaga()]);
}
