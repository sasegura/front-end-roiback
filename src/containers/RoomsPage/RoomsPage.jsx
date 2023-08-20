import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  dates,
  fetchRooms,
  hasErrorRooms,
  isLoaddingRooms,
  rooms,
} from '../../store/reducers/roomsSlice';
import RoomCardInfo from '../../components/RoomCardInfo/RoomCardInfo';
import { updateRoom } from '../../store/reducers/reservationSlice';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/styledComponents/Container';
import Loading from '../../components/Loading/Loading';
import { LightText } from '../../components/styledComponents/Typography';
import { DateRange, StyledCalendarIcon } from './RoomsPage.styles';
import { DateTransform } from '../../utils/utilFunctions';

/**
 * Container that show all the information of rooms to select.
 * @return {React.Component}
 */
const Rooms = () => {
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

  return (
    <Container>
      {isRoomsLoading && <Loading />}
      {!hasErrorFetching && !isRoomsLoading && roomsData?.length === 0 && (
        <p>No hay cursos disponibles</p>
      )}
      {!hasErrorFetching && !isRoomsLoading && roomsData?.length > 0 && (
        <>
          <DateRange>
            <StyledCalendarIcon />
            <LightText>{`${DateTransform(
              roomsDates?.checkin
            )} - ${DateTransform(roomsDates?.checkout)}`}</LightText>
          </DateRange>

          {roomsList?.map((room, index) => (
            <RoomCardInfo
              key={`roomCard${index}`}
              rooms={room.boards}
              title={room.name}
              handleSelectedRoom={handleSelectedRoom}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default Rooms;
