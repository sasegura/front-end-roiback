import { screen } from '@testing-library/react';

import { renderWithWrapper } from '../../utils/TestWrapper';
import { DatesParse } from '../../utils/utilFunctions';
import { room } from '../../utils/MockData';
import Dates from './Dates';

describe('RoomCardInfo', () => {
  beforeEach(async () => {
    renderWithWrapper(<Dates dateIn={room.dateIn} dateOut={room.dateOut} />);
  });

  test('renders ReservationResumeCard data', async () => {
    const dates = screen.getByText(`${DatesParse(room.dateIn, room.dateOut)}`);
    expect(dates).toBeInTheDocument();
  });
});
