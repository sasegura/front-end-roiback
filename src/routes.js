import { Routes, Route } from 'react-router-dom';
import Rooms from './containers/RoomsPage/RoomsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rooms />} />
    </Routes>
  );
}
