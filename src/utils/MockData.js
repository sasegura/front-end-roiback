export const room = {
  category: 'Doble Vista Mar',
  date: '2022/05/22 - 2022/05/28',
  name: 'solo alojamiento',
  price: 366,
  dateIn: '2022-05-22',
  dateOut: '2022-05-28',
};

export const user = {
  concern: true,
  country: 'Francia',
  email: 'sasegura.fernandez87@gmail.com',
  firstName: 'Sergio',
  lastName: 'Segura',
};

export const rooms = [
  {
    name: 'Doble Vista Piscina',
    boards: [
      {
        price: 352,
        name: 'solo alojamiento',
      },
      {
        price: 563,
        name: 'habitación y desayuno',
      },
      {
        price: 655,
        name: 'todo incluído',
      },
    ],
  },
  {
    name: 'Doble Vista Mar',
    boards: [
      {
        price: 366,
        name: 'solo alojamiento',
      },
      {
        price: 580,
        name: 'habitación y desayuno',
      },
      {
        price: 675,
        name: 'todo incluído',
      },
    ],
  },
];

export const dates = {
  checkin: '2022-05-22',
  checkout: '2022-05-28',
};
export const initialState = { reservation: { room, user } };
