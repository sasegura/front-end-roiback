import React from 'react';
import {
  Card,
  CardSectionBorder,
  CardSectionBorderTextAlignCenter,
} from '../../components/styledComponents/Card';
import { Container } from '../../components/styledComponents/Container';
import { useSelector } from 'react-redux';
import { room, user } from '../../store/reducers/reservationSlice';
import {
  BigText,
  Heading2,
  LightText,
  Paragraph1,
  StyledHeading2,
} from '../../components/styledComponents/Typography';
import { capitalizeString } from '../../utils/utilFunctions';
import Dates from '../../components/Date/Dates';
import { GreenCheckIcon } from '../../components/styledComponents/Icons';

/**
 * Container that show all the information of rooms to select.
 * @return {React.Component}
 */
const ReservationComplete = () => {
  const reservationData = useSelector(room);
  const userData = useSelector(user);

  return (
    <Container>
      <Card $minWidth={'250px'}>
        <CardSectionBorderTextAlignCenter $paddingY="50px" $align="center">
          <GreenCheckIcon />
          <BigText>Reserva Y54621</BigText>
        </CardSectionBorderTextAlignCenter>
        <CardSectionBorder>
          <Heading2>{capitalizeString(reservationData.category)}</Heading2>
          <Dates
            dateIn={reservationData?.dateIn}
            dateOut={reservationData?.dateOut}
          />
          <Paragraph1>{capitalizeString(reservationData?.name)}</Paragraph1>
        </CardSectionBorder>
        <CardSectionBorder>
          <StyledHeading2>Total: ${reservationData?.price}</StyledHeading2>
        </CardSectionBorder>
        <CardSectionBorder>
          <Heading2>
            {userData.firstName} {userData.lastName}
          </Heading2>
          <LightText>{userData.email}</LightText>
          <Paragraph1>{userData.country}</Paragraph1>
        </CardSectionBorder>
      </Card>
    </Container>
  );
};

export default ReservationComplete;
