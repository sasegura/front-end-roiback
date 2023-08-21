import { useDispatch, useSelector } from 'react-redux';
import {
  dates,
  fetchRooms,
  hasErrorRooms,
  isLoaddingRooms,
  rooms,
} from '../../store/reducers/roomsSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { updateRoom } from '../../store/reducers/reservationSlice';

/**
 * Hook to control rooms page actions.
 * @return {Object} All the actions and selectors to use in rooms page
 */
const useRoomsPage = () => {
  const roomsData = useSelector(rooms);
  const roomsDates = useSelector(dates);
  const isRoomsLoading = useSelector(isLoaddingRooms);
  const hasErrorFetching = useSelector(hasErrorRooms);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roomsList = roomsData;

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const handleSelectedRoom = (room) => {
    const newRoomData = { ...room };
    const roomCategory = roomsData.find((rooms) => {
      return rooms.boards.find(
        (filterRoom) =>
          filterRoom.price === room.price && filterRoom.name === room.name
      );
    });

    newRoomData.category = roomCategory.name;
    newRoomData.dateIn = roomsDates.checkin;
    newRoomData.dateOut = roomsDates.checkout;

    dispatch(updateRoom(newRoomData));
    navigate('/resume');
  };

  return {
    roomsData,
    roomsDates,
    isRoomsLoading,
    hasErrorFetching,
    roomsList,
    handleSelectedRoom,
  };
};
export default useRoomsPage;
