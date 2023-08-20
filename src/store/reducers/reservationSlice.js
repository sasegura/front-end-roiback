import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  room: {},
  user: {},
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const room = (state) => state.reservation.room;
export const user = (state) => state.reservation.user;

export const { updateRoom, updateUser } = reservationSlice.actions;

export default reservationSlice.reducer;
