import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithWrapper } from '../../utils/TestWrapper';
import UserForm from './UserForm';
import { user } from '../../utils/MockData';

const mockHandleSubmit = jest.fn();

describe('RoomCardInfo', () => {
  beforeEach(async () => {
    renderWithWrapper(<UserForm price={'520'} onSubmit={mockHandleSubmit} />);
  });

  test('renders UserForm inputs', async () => {
    const nameInput = screen.getByLabelText('Nombre');
    expect(nameInput).toBeInTheDocument();
  });

  test('show UserForm error messages', async () => {
    const button = screen.getByRole('button', { name: 'Reservar' });

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const nameErrorMessaje = screen.getByText('Nombre es requerido');
      const lastNameErrorMessaje = screen.getByText('Apellido es requerido');
      const emailErrorMessaje = screen.getByText('Email es requerido');

      expect(nameErrorMessaje).toBeInTheDocument();
      expect(lastNameErrorMessaje).toBeInTheDocument();
      expect(emailErrorMessaje).toBeInTheDocument();
    });
  });

  test('not show UserForm error messages', async () => {
    const nameInput = screen.getByLabelText('Nombre');
    const lastNameInput = screen.getByLabelText('Apellido');
    const emailInput = screen.getByLabelText('Email');
    const concernInput = screen.getByLabelText('Acepto los términos y condiciones');
    const countryInput = screen.getByLabelText('País');
    const button = screen.getByRole('button', { name: 'Reservar' });

    act(() => {
      userEvent.type(nameInput, user.firstName);
      userEvent.type(lastNameInput, user.lastName);
      userEvent.type(emailInput, user.email);
      fireEvent.change(countryInput, { target: { value: user.country } });
      fireEvent.click(concernInput);
      fireEvent.click(button);
    });

    await waitFor(() => {
      const nameErrorMessaje = screen.queryByText('Nombre es requerido');
      const lastNameErrorMessaje = screen.queryByText('Apellido es requerido');
      const emailErrorMessaje = screen.queryByText('Email es requerido');
      const countryErrorMessaje = screen.queryByText('Pais es requerido');

      expect(nameErrorMessaje).not.toBeInTheDocument();
      expect(lastNameErrorMessaje).not.toBeInTheDocument();
      expect(emailErrorMessaje).not.toBeInTheDocument();
      expect(countryErrorMessaje).not.toBeInTheDocument();
      expect(concernInput.checked).toEqual(true);
      expect(mockHandleSubmit.mock.calls).toHaveLength(1);
      expect(mockHandleSubmit.mock.calls[0][0]).toEqual(user);
    });
  });
});
