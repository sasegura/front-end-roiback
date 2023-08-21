import { screen } from '@testing-library/react';

import { renderWithWrapper } from '../../utils/TestWrapper';
import { initialState, room, user } from '../../utils/MockData';
import ReservationComplete from './ReservationComplete';
import { DatesParse, capitalizeString } from '../../utils/utilFunctions';

describe('ReservationComplete', () => {
  beforeEach(async () => {
    renderWithWrapper(<ReservationComplete />, { initialState });
  });

  test('render user information', async () => {
    const userEmail = await screen.findByText(user.email);
    const userName = await screen.findByText(
      `${user.firstName} ${user.lastName}`
    );
    const userCountry = await screen.findByText(user.country);
    expect(userEmail).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(userCountry).toBeInTheDocument();
  });

  test('render reservation information', async () => {
    const reservationRoomCategory = await screen.findByText(room.category);
    const reservationRoomPrice = await screen.findByText(
      `Total: $${room?.price}`
    );
    const reservationRoomDate = await screen.findByText(
      `${DatesParse(room.dateIn, room.dateOut)}`
    );
    const reservationRoomName = await screen.findByText(
      capitalizeString(room.name)
    );
    expect(reservationRoomCategory).toBeInTheDocument();
    expect(reservationRoomDate).toBeInTheDocument();
    expect(reservationRoomPrice).toBeInTheDocument();
    expect(reservationRoomName).toBeInTheDocument();
  });
});
