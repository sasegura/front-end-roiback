import { Routes, Route } from 'react-router-dom';
import Rooms from './containers/RoomsPage/RoomsPage';
import ReservationResumePage from './containers/ReservationResumePage/ReservationResumePage';
import ReservationComplete from './containers/ReservationComplete/ReservationComplete';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rooms />} />
      <Route path="/resume" element={<ReservationResumePage />} />
      <Route path="/complete" element={<ReservationComplete />} />
    </Routes>
  );
}
