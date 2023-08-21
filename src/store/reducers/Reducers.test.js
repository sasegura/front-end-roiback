import { dates, room, rooms, user } from '../../utils/MockData';
import ReservationReducer, {
  errorFetchingUser,
  restoreUserUpdatedSuccesfullyFlag,
  updateRoom,
  updateUser,
  userFetched,
  room as RoomSelector,
  user as UserSelector,
  isUpdatingUser as isUpdatingUserSelector,
  isUserUpdatedSuccesfully as isUserUpdatedSuccesfullySelector,
  hasErrorFetching as hasErrorFetchingSelector,
} from './reservationSlice';
import RoomsReducer, {
  errorFetchingRooms,
  fetchRooms,
  roomsFetched,
  rooms as roomsSelector,
  dates as datesSelector,
  isLoaddingRooms as isLoaddingRoomsSelector,
  hasErrorRooms as hasErrorRoomsSelector,
} from './roomsSlice';

describe('Reservation Reducers test', () => {
  it('should return the initial state', () => {
    expect(ReservationReducer(undefined, { type: undefined })).toEqual({
      room: {},
      user: {},
      isUpdatingUser: false,
      isUserUpdatedSuccesfully: false,
      hasErrorFetching: false,
    });
  });

  it('should handle a update room', () => {
    const previousState = {};
    expect(ReservationReducer(previousState, updateRoom(room))).toEqual({
      room: room,
    });
  });

  it('should handle a update user', () => {
    const previousState = {};
    expect(ReservationReducer(previousState, updateUser())).toEqual({
      isUpdatingUser: true,
      hasErrorFetching: false,
    });
  });

  it('should handle a fetched user', () => {
    const previousState = {};
    expect(ReservationReducer(previousState, userFetched(user))).toEqual({
      user: user,
      isUpdatingUser: false,
      isUserUpdatedSuccesfully: true,
    });
  });

  it('should handle an error fetching user', () => {
    const previousState = {};
    expect(ReservationReducer(previousState, errorFetchingUser())).toEqual({
      isUpdatingUser: false,
      hasErrorFetching: true,
    });
  });

  it('should handle restore flag to update user', () => {
    const previousState = {};
    expect(
      ReservationReducer(previousState, restoreUserUpdatedSuccesfullyFlag())
    ).toEqual({
      isUserUpdatedSuccesfully: false,
    });
  });
});

describe('Rooms Reducers test', () => {
  it('should return the initial state', () => {
    expect(RoomsReducer(undefined, { type: undefined })).toEqual({
      rooms: [],
      dates: {},
      hasError: false,
      isLoading: false,
    });
  });

  it('should handle a update room', () => {
    const previousState = {};
    expect(RoomsReducer(previousState, roomsFetched({ rooms, dates }))).toEqual(
      {
        isLoading: false,
        rooms: rooms,
        dates: dates,
      }
    );
  });

  it('should handle a update user', () => {
    const previousState = {};
    expect(RoomsReducer(previousState, errorFetchingRooms())).toEqual({
      isLoading: false,
      hasError: true,
    });
  });

  it('should handle a fetched user', () => {
    const previousState = {};
    expect(RoomsReducer(previousState, fetchRooms(user))).toEqual({
      isLoading: true,
      hasError: false,
    });
  });
});

describe('Reservation Selectors test', () => {
  it('should return the room of the state', () => {
    const state = { reservation: { room: room } };
    expect(RoomSelector(state)).toEqual(room);
  });

  it('should return the user of the state', () => {
    const state = { reservation: { user: { ...user } } };
    expect(UserSelector(state)).toEqual(user);
  });
  it('should return the isUpdatingUser Selector of the state', () => {
    const state = { reservation: { isUpdatingUser: true } };
    expect(isUpdatingUserSelector(state)).toEqual(true);
  });
  it('should return the isUserUpdatedSuccesfully Selector of the state', () => {
    const state = { reservation: { isUserUpdatedSuccesfully: true } };
    expect(isUserUpdatedSuccesfullySelector(state)).toEqual(true);
  });
  it('should return the hasErrorFetching Selector of the state', () => {
    const state = { reservation: { hasErrorFetching: true } };
    expect(hasErrorFetchingSelector(state)).toEqual(true);
  });
});

describe('Rooms Selectors test', () => {
  it('should return the rooms of the state', () => {
    const state = { rooms: { rooms } };
    expect(roomsSelector(state)).toEqual(rooms);
  });
  it('should return the dates of the state', () => {
    const state = { rooms: { dates } };
    expect(datesSelector(state)).toEqual(dates);
  });
  it('should return the isLoaddingRooms Selector of the state', () => {
    const state = { rooms: { isLoading: true } };
    expect(isLoaddingRoomsSelector(state)).toEqual(true);
  });
  it('should return the hasErrorRooms Selector of the state', () => {
    const state = { rooms: { hasError: true } };
    expect(hasErrorRoomsSelector(state)).toEqual(true);
  });
});
