import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../store';
import Theme from '../theme/theme';

const store = ({ preloadedState } = {}) =>
  configureStore({ reducer: rootReducer, preloadedState });
function renderWithWrapper(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store({ preloadedState: initialState })}>
          <Theme>{children}</Theme>
        </Provider>
      </BrowserRouter>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export { renderWithWrapper };
export { store };
