import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
  dates: {},
  hasError: false,
  isLoading: false,
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    roomsFetched: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload.rooms;
      state.dates = action.payload.dates;
    },
    errorFetchingRooms: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    fetchRooms: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
  },
});

export const rooms = (state) => state.rooms.rooms;
export const dates = (state) => state.rooms.dates;
export const isLoaddingRooms = (state) => state.rooms.isLoading;
export const hasErrorRooms = (state) => state.rooms.hasError;

export const { roomsFetched, errorFetchingRooms, fetchRooms } =
  roomsSlice.actions;

export default roomsSlice.reducer;
