import { roomsInfo } from './data';

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(roomsInfo);
  }, 1000);
});

/**
 * service to get rooms.
 * @return {Object} return rooms information
 */
export const getRooms = async () => {
  const rooms = await myPromise.then(async (response) => response);
  return rooms;
};
