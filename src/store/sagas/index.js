import { spawn } from 'redux-saga/effects';
import roomsSaga from './room';
import userSaga from './user';

/**
 * Sagas that launch all the sagas.
 */
function* rootSaga() {
  yield spawn(roomsSaga);
  yield spawn(userSaga);
}

export default rootSaga;
