import { capitalizeString } from '../../utils/utilFunctions';
import Dates from '../Date/Dates';
import { Card, CardSectionBorder, CardTitle } from '../styledComponents/Card';
import { FlexContainer, FlexItem } from '../styledComponents/Container';
import { Heading2, Heading3 } from '../styledComponents/Typography';

/**
 * Reservation Resume component.
 * @param {Object} reservationData - object with reservation data
 * @return {React.ReactElement} Card with Reservation Resume
 */
export const ReservationResumeCard = ({ reservationData }) => (
  <>
    <Heading3>Resumen de tu reserva</Heading3>
    <Card $minWidth={'300px'}>
      <CardTitle>
        <h2>{reservationData.category}</h2>
      </CardTitle>
      <CardSectionBorder $paddingL="25px">
        <FlexContainer>
          <FlexItem $flex={2}>
            <Dates
              dateIn={reservationData?.dateIn}
              dateOut={reservationData?.dateOut}
            />
            <Heading2>{capitalizeString(reservationData?.name)}</Heading2>
          </FlexItem>
          <FlexItem $align="center">
            <Heading2>$ {reservationData?.price}</Heading2>
          </FlexItem>
        </FlexContainer>
      </CardSectionBorder>
    </Card>
  </>
);
