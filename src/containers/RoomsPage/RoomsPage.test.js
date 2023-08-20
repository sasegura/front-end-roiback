import { roomsInfo } from '../../api/data';
import { fetchRooms } from '../../store/reducers/roomsSlice';
import roomsReducer from '../../store/reducers/roomsSlice';
import reservationReducer from '../../store/reducers/reservationSlice';

import SagaTester from 'redux-saga-tester';
import roomsSaga from '../../store/sagas/room';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  reservation: reservationReducer,
});

const delay = (t) => new Promise((res) => setTimeout(() => res(), t));

describe('RoomsPage should get rooms info from sagas dispatch', () => {
  test('should handle sagas fetchRooms', async () => {
    const sagaTester = new SagaTester({
      reducers: rootReducer,
    });

    sagaTester.start(roomsSaga);

    sagaTester.dispatch(fetchRooms());
    await delay(1000);

    const state = sagaTester.getState();

    expect(state.rooms.rooms[0].boards.length).toEqual(
      roomsInfo.rooms[0].boards.length
    );
  });
});
