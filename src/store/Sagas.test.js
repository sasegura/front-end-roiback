import SagaTester from 'redux-saga-tester';

import { roomsInfo } from '../api/data';
import { fetchRooms } from './reducers/roomsSlice';
import roomsReducer from './reducers/roomsSlice';
import reservationReducer, { updateUser } from './reducers/reservationSlice';
import { combineReducers } from 'redux';
import { user } from '../utils/MockData';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  reservation: reservationReducer,
});

describe('Sagas should by dispatched', () => {
  test('should handle sagas fetchRooms', async () => {
    const sagaTester = new SagaTester({
      reducers: rootReducer,
    });

    sagaTester.start(rootSaga);
    sagaTester.dispatch(fetchRooms());
    const state = sagaTester.getState();

    expect(state.rooms.isLoading).toEqual(true);
    expect(state.rooms.hasError).toEqual(false);
  });

  test('should handle sagas updateUser', async () => {
    const sagaTester = new SagaTester({
      reducers: rootReducer,
    });

    sagaTester.start(rootSaga);
    sagaTester.dispatch(updateUser(user));
    const state = sagaTester.getState();

    expect(state.reservation.isUpdatingUser).toEqual(true);
    expect(state.reservation.hasErrorFetching).toEqual(false);
  });
});
