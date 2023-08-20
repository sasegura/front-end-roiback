import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RoomCardInfo from './RoomCardInfo';
import { roomsInfo } from '../../api/data';
import { renderWithWrapper } from '../../utils/TestWrapper';
import { capitalizeString } from '../../utils/utilFunctions';

const title = 'RoomCardInfoTitle';

describe('RoomCardInfo', () => {
  const mockHandleSelectedRoom = jest.fn();
  const rooms = roomsInfo.rooms[0].boards;
  beforeEach(async () => {
    renderWithWrapper(
      <RoomCardInfo
        title={title}
        rooms={rooms}
        handleSelectedRoom={mockHandleSelectedRoom}
      />
    );
  });

  test('renders RoomCardInfo title', async () => {
    const cardTitle = screen.getByText(title);
    expect(cardTitle).toBeInTheDocument();
  });

  test('renders RoomCardInfo buttons', async () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(rooms.length);
  });

  test('renders RoomCardInfo and show first room name', async () => {
    const firstRoomName = screen.getByText(capitalizeString(rooms[0].name));
    expect(firstRoomName).toBeInTheDocument();
  });

  test('call handleSelectedRoom function on button clic', async () => {
    const firstRoomButton = screen.getAllByRole('button')[0];
    userEvent.click(firstRoomButton);
    expect(mockHandleSelectedRoom.mock.calls).toHaveLength(1);
    expect(mockHandleSelectedRoom.mock.calls[0][0]).toBe(rooms[0]);
  });
});
