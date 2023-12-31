import { call, put, takeEvery } from 'redux-saga/effects';
import { getRooms } from '../../api/getRooms';
import {
  errorFetchingRooms,
  fetchRooms,
  roomsFetched,
} from '../reducers/roomsSlice';

/**
 * Get rooms info by api call and update state.
 */
export function* loadRooms() {
  try {
    const rooms = yield call(getRooms);
    yield put(roomsFetched(rooms));
  } catch (err) {
    console.error(err?.message);
    yield put(errorFetchingRooms());
  }
}

/**
 * Sagas that call rooms actions.
 */
export default function* roomsSaga() {
  yield takeEvery(fetchRooms.type, loadRooms);
}
