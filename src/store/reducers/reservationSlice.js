import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  room: {},
  user: {},
  isUpdatingUser: false,
  isUserUpdatedSuccesfully: false,
  hasErrorFetching: false,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
    updateUser: (state) => {
      state.isUpdatingUser = true;
      state.hasErrorFetching = false;
    },
    userFetched: (state, action) => {
      state.user = action.payload;
      state.isUserUpdatedSuccesfully = true;
      state.isUpdatingUser = false;
    },
    errorFetchingUser: (state) => {
      state.isUpdatingUser = false;
      state.hasErrorFetching = true;
    },
    restoreUserUpdatedSuccesfullyFlag: (state) => {
      state.isUserUpdatedSuccesfully = false;
    },
  },
});

export const room = (state) => state.reservation.room;
export const user = (state) => state.reservation.user;
export const isUpdatingUser = (state) => state.reservation.isUpdatingUser;
export const isUserUpdatedSuccesfully = (state) =>
  state.reservation.isUserUpdatedSuccesfully;
export const hasErrorFetching = (state) => state.reservation.hasErrorFetching;

export const {
  updateRoom,
  updateUser,
  userFetched,
  errorFetchingUser,
  restoreUserUpdatedSuccesfullyFlag,
} = reservationSlice.actions;

export default reservationSlice.reducer;
