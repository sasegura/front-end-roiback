import React from 'react';
import {
  Card,
  CardSectionBorder,
} from '../../components/styledComponents/Card';
import { Container } from '../../components/styledComponents/Container';
import { useSelector } from 'react-redux';
import { room, user } from '../../store/reducers/reservationSlice';
import {
  BigText,
  Heading2,
  LightText,
  Paragraph1,
} from '../../components/styledComponents/Typography';
import {
  GreenCheckIcon,
  StyledCardSectionBorder,
  StyledHeading2,
} from './ReservationComplete.styles';
import { DateTransform, capitalizeString } from '../../utils/utilFunctions';

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
        <StyledCardSectionBorder $paddingY="50px" $align="center">
          <GreenCheckIcon />
          <BigText>Reserva Y54621</BigText>
        </StyledCardSectionBorder>
        <CardSectionBorder>
          <Heading2>{capitalizeString(reservationData.category)}</Heading2>
          <LightText>
            {`${DateTransform(reservationData?.dateIn)} - ${DateTransform(
              reservationData?.dateOut
            )}`}
          </LightText>
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
