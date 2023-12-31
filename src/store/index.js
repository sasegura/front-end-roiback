import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import roomsReducer from './reducers/roomsSlice';
import reservationReducer from './reducers/reservationSlice';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  rooms: roomsReducer,
  reservation: reservationReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
export const persistor = persistStore(store);
