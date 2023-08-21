import { screen } from '@testing-library/react';

import { renderWithWrapper } from '../../utils/TestWrapper';
import { DatesParse, capitalizeString } from '../../utils/utilFunctions';
import { ReservationResumeCard } from './ReservationResumeCard';
import { room } from '../../utils/MockData';

describe('RoomCardInfo', () => {
  beforeEach(async () => {
    renderWithWrapper(<ReservationResumeCard reservationData={room} />);
  });

  test('renders ReservationResumeCard data', async () => {
    const roomCategory = screen.getByText(room.category);
    const roomPrice = screen.getByText(`$ ${room.price}`);
    const roomName = screen.getByText(capitalizeString(room.name));
    const roomDates = screen.getByText(DatesParse(room.dateIn, room.dateOut));

    expect(roomCategory).toBeInTheDocument();
    expect(roomPrice).toBeInTheDocument();
    expect(roomName).toBeInTheDocument();
    expect(roomDates).toBeInTheDocument();
  });
});
