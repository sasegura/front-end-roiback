import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  isUpdatingUser,
  isUserUpdatedSuccesfully,
  restoreUserUpdatedSuccesfullyFlag,
  room,
  updateUser,
} from '../../store/reducers/reservationSlice';
import {
  Card,
  CardSectionBorder,
  CardTitle,
} from '../../components/styledComponents/Card';
import UserForm from '../../components/UserForm/UserForm';
import {
  CenterFlexItem,
  Container,
  FlexContainer,
  FlexItem,
} from '../../components/styledComponents/Container';
import {
  Heading2,
  Heading3,
  LightText,
} from '../../components/styledComponents/Typography';
import { DateTransform, capitalizeString } from '../../utils/utilFunctions';

/**
 * Container that show all the information of reservation resume.
 * @return {React.Component}
 */
const ReservationResumePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reservationData = useSelector(room);
  const isUpdatingUserSelector = useSelector(isUpdatingUser);
  const isUserUpdatedSuccesfullySelector = useSelector(
    isUserUpdatedSuccesfully
  );

  const onSubmit = (data) => {
    dispatch(updateUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(restoreUserUpdatedSuccesfullyFlag());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isUserUpdatedSuccesfullySelector) {
      navigate('/complete');
    }
  }, [isUserUpdatedSuccesfullySelector, dispatch, navigate]);

  return (
    <Container>
      <FlexContainer $gap={'40px'}>
        <FlexItem>
          <Heading3>Resumen de tu reserva</Heading3>
          <Card $minWidth={'300px'}>
            <CardTitle>
              <h2>{reservationData.category}</h2>
            </CardTitle>
            <CardSectionBorder $paddingL="25px">
              <FlexContainer $align="center">
                <FlexItem $flex={2}>
                  <LightText>
                    {`${DateTransform(
                      reservationData?.dateIn
                    )} - ${DateTransform(reservationData?.dateOut)}`}
                  </LightText>
                  <Heading2>{capitalizeString(reservationData?.name)}</Heading2>
                </FlexItem>
                <CenterFlexItem $align="center">
                  <Heading2>$ {reservationData?.price}</Heading2>
                </CenterFlexItem>
              </FlexContainer>
            </CardSectionBorder>
          </Card>
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
