import React from 'react';
import RoomCardInfo from '../../components/RoomCardInfo/RoomCardInfo';
import { Container } from '../../components/styledComponents/Container';
import Loading from '../../components/Loading/Loading';
import useRoomsPage from './useRoomsPage';
import Dates from '../../components/Date/Dates';
import { CalendarIcon } from '../../components/styledComponents/Icons';
import { DateRange } from '../../components/styledComponents/Dates';

/**
 * Container that show all the information of rooms to select.
 * @return {React.Component}
 */
const Rooms = () => {
  const {
    roomsData,
    roomsDates,
    isRoomsLoading,
    hasErrorFetching,
    handleSelectedRoom,
  } = useRoomsPage();

  return (
    <Container>
      {isRoomsLoading && <Loading />}
      {!hasErrorFetching && !isRoomsLoading && roomsData?.length === 0 && (
        <p>No hay habitaciones disponibles</p>
      )}
      {!hasErrorFetching && !isRoomsLoading && roomsData?.length > 0 && (
        <>
          <DateRange>
            <CalendarIcon />
            <Dates
              dateIn={roomsDates?.checkin}
              dateOut={roomsDates?.checkout}
            />
          </DateRange>

          {roomsData?.map((room, index) => (
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
