import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  isUpdatingUser,
  isUserUpdatedSuccesfully,
  restoreUserUpdatedSuccesfullyFlag,
  room,
  updateUser,
} from '../../store/reducers/reservationSlice';
import { useEffect } from 'react';

/**
 * Hook to control reservation resume page actions.
 * @return {Object} All the actions and selectors to use in reservation resume page
 */
const useReservationResumePage = () => {
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

  return { reservationData, onSubmit, isUpdatingUserSelector };
};

export default useReservationResumePage;
