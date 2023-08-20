import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Theme from './theme/theme';
import store, { persistor } from './store';
import AppRoutes from './routes';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Theme>
            <AppRoutes />
          </Theme>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
