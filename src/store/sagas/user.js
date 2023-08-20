import { call, put, takeEvery } from 'redux-saga/effects';
import {
  errorFetchingUser,
  updateUser,
  userFetched,
} from '../reducers/reservationSlice';
import { updateUserOnApi } from '../../api/updateUser';

/**
 * Update user by api call.
 * @param {Object} payload - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 */
export function* updateUserSaga({ payload }) {
  try {
    const user = yield call(() => updateUserOnApi(payload));
    yield put(userFetched(user));
  } catch (err) {
    console.error(err?.message);
    yield put(errorFetchingUser());
  }
}

/**
 * Sagas that call user actions.
 */
export default function* userSaga() {
  yield takeEvery(updateUser.type, updateUserSaga);
}
