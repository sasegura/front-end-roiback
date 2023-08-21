import { act, screen } from '@testing-library/react';
import { dates, rooms } from '../../utils/MockData';
import { renderWithWrapper } from '../../utils/TestWrapper';
import { DatesParse, capitalizeString } from '../../utils/utilFunctions';
import Rooms from './RoomsPage';
import useRoomsPage from './useRoomsPage';

jest.mock('./useRoomsPage');

describe('Room Page Info', () => {
  beforeEach(async () => {
    act(() => {
      useRoomsPage.mockImplementation(() => ({
        roomsData: rooms,
        roomsDates: dates,
        isRoomsLoading: false,
        hasErrorFetching: false,
      }));
    });
    renderWithWrapper(<Rooms />);
  });

  test('Show dates correctly formated', async () => {
    const datesText = screen.getByText(
      `${DatesParse(dates.checkin, dates.checkout)}`
    );
    expect(datesText).toBeInTheDocument();
  });

  test('Show first room infp', async () => {
    const title = screen.getByText(`${rooms[0].name}`);
    expect(title).toBeInTheDocument();
  });

  test('Show first room infp', async () => {
    const priceText = screen.getByText(`$${rooms[0].boards[0].price}`);
    const nameText = screen.getAllByText(
      capitalizeString(`${rooms[0].boards[0].name}`)
    );
    expect(priceText).toBeInTheDocument();
    expect(nameText[0]).toBeInTheDocument();
  });
});

describe('Room Page Info without rooms', () => {
  test('Show loading icon', async () => {
    act(() => {
      useRoomsPage.mockImplementation(() => ({
        roomsData: [],
        roomsDates: dates,
        isRoomsLoading: true,
        hasErrorFetching: false,
      }));
    });
    renderWithWrapper(<Rooms />);
    const title = screen.getByTestId('loadingIcon');
    expect(title).toBeInTheDocument();
  });

  test('Show no available room text', async () => {
    act(() => {
      useRoomsPage.mockImplementation(() => ({
        roomsData: [],
        roomsDates: dates,
        isRoomsLoading: false,
        hasErrorFetching: false,
      }));
    });
    renderWithWrapper(<Rooms />);
    const title = screen.getByText(`No hay habitaciones disponibles`);
    expect(title).toBeInTheDocument();
  });
});
