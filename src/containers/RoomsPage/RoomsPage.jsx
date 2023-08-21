import React from 'react';
import RoomCardInfo from '../../components/RoomCardInfo/RoomCardInfo';
import { Container } from '../../components/styledComponents/Container';
import Loading from '../../components/Loading/Loading';
import { LightText } from '../../components/styledComponents/Typography';
import { DateRange, StyledCalendarIcon } from './RoomsPage.styles';
import { DateTransform } from '../../utils/utilFunctions';
import useRoomsPage from './useRoomsPage';

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
    roomsList,
    handleSelectedRoom,
  } = useRoomsPage();

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
