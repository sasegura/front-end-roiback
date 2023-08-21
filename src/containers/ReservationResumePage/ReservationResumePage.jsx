import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import {
  Container,
  FlexContainer,
  FlexItem,
} from '../../components/styledComponents/Container';
import { ReservationResumeCard } from '../../components/ReservationResumeCard/ReservationResumeCard';
import useReservationResumePage from './useReservationResumePage';

/**
 * Container that show all the information of reservation resume.
 * @return {React.Component}
 */
const ReservationResumePage = () => {
  const { reservationData, onSubmit, isUpdatingUserSelector } =
    useReservationResumePage();

  return (
    <Container>
      <FlexContainer $gap={'40px'} $alignItems="flex-star">
        <FlexItem>
          <ReservationResumeCard reservationData={reservationData} />
        </FlexItem>
        <FlexItem>
          <UserForm
            price={reservationData?.price}
            onSubmit={onSubmit}
            isUpdatingUserSelector={isUpdatingUserSelector}
          />
        </FlexItem>
      </FlexContainer>
    </Container>
  );
};

export default ReservationResumePage;
