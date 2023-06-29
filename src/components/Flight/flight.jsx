import React, { useEffect, useState } from 'react';

const flights = [
  {
    id: 1,
    from: 'Prague',
    to: 'London',
    departure: '2023-06-10T10:00:00',
    arrival: '2023-06-10T12:00:00',
    duration: '2h',
    price: 150,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: false },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 2,
    from: 'London',
    to: 'Paris',
    departure: '2023-06-10T14:00:00',
    arrival: '2023-06-10T16:00:00',
    duration: '2h',
    price: 200,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 3,
    from: 'Paris',
    to: 'Rome',
    departure: '2023-06-10T09:00:00',
    arrival: '2023-06-10T11:00:00',
    duration: '2h',
    price: 180,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: false },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 4,
    from: 'Rome',
    to: 'Barcelona',
    departure: '2023-06-10T13:00:00',
    arrival: '2023-06-10T16:00:00',
    duration: '3h',
    price: 250,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 5,
    from: 'Barcelona',
    to: 'Berlin',
    departure: '2023-06-10T11:00:00',
    arrival: '2023-06-10T13:00:00',
    duration: '2h',
    price: 170,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: false },
    ],
  },
  {
    id: 6,
    from: 'Berlin',
    to: 'Vienna',
    departure: '2023-06-10T09:30:00',
    arrival: '2023-06-10T11:30:00',
    duration: '2h',
    price: 190,
    seats: [
      { id: 1, number: 'A1', available: false },
      { id: 2, number: 'A2', available: false },
      { id: 3, number: 'B1', available: false },
      { id: 4, number: 'B2', available: false },
    ],
  },
  {
    id: 7,
    from: 'Vienna',
    to: 'Amsterdam',
    departure: '2023-06-10T10:15:00',
    arrival: '2023-06-10T12:15:00',
    duration: '2h',
    price: 180,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 8,
    from: 'Amsterdam',
    to: 'Madrid',
    departure: '2023-06-10T13:30:00',
    arrival: '2023-06-10T16:30:00',
    duration: '3h',
    price: 250,
    seats: [
      { id: 1, number: 'A1', available: false },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 9,
    from: 'Madrid',
    to: 'Athens',
    departure: '2023-06-10T11:30:00',
    arrival: '2023-06-10T14:30:00',
    duration: '3h',
    price: 280,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 10,
    from: 'Athens',
    to: 'Vienna',
    departure: '2023-06-11T09:00:00',
    arrival: '2023-06-11T12:00:00',
    duration: '3h',
    price: 220,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 11,
    from: 'Vienna',
    to: 'Lisbon',
    departure: '2023-06-11T14:30:00',
    arrival: '2023-06-11T18:30:00',
    duration: '4h',
    price: 300,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: false },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: false },
    ],
  },
  {
    id: 12,
    from: 'Lisbon',
    to: 'Vienna',
    departure: '2023-06-11T23:00:00',
    arrival: '2023-06-12T02:00:00',
    duration: '3h',
    price: 190,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 13,
    from: 'Prague',
    to: 'London',
    departure: '2023-06-11T17:00:00',
    arrival: '2023-06-11T19:00:00',
    duration: '2h',
    price: 150,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 14,
    from: 'London',
    to: 'Paris',
    departure: '2023-06-11T14:00:00',
    arrival: '2023-06-11T16:00:00',
    duration: '2h',
    price: 200,
    seats: [
      { id: 1, number: 'A1', available: false },
      { id: 2, number: 'A2', available: false },
      { id: 3, number: 'B1', available: false },
      { id: 4, number: 'B2', available: false },
    ],
  },
  {
    id: 15,
    from: 'Paris',
    to: 'Rome',
    departure: '2023-06-11T09:00:00',
    arrival: '2023-06-11T11:00:00',
    duration: '2h',
    price: 180,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: false },
      { id: 4, number: 'B2', available: true },
    ],
  },
  {
    id: 16,
    from: 'Rome',
    to: 'Barcelona',
    departure: '2023-06-11T06:00:00',
    arrival: '2023-06-11T09:00:00',
    duration: '3h',
    price: 250,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: false },
      { id: 4, number: 'B2', available: false },
    ],
  },
  {
    id: 17,
    from: 'Barcelona',
    to: 'Berlin',
    departure: '2023-06-11T01:00:00',
    arrival: '2023-06-11T03:00:00',
    duration: '2h',
    price: 370,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: false },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: false },
    ],
  },
  {
    id: 18,
    from: 'Berlin',
    to: 'Vienna',
    departure: '2023-06-11T09:30:00',
    arrival: '2023-06-11T11:30:00',
    duration: '2h',
    price: 220,
    seats: [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: true },
      { id: 3, number: 'B1', available: true },
      { id: 4, number: 'B2', available: true },
    ],
  },
];
export const Flight = () => {
  // const [flights, setFlights] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [dateDeparture, setDateDeparture] = useState('');
  const [dateArrival, setDateArrival] = useState('');

  // useEffect(() => {
  //   fetch('https://pastebin.com/LRfGdcJx')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFlights(data);
  //     });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flight__container">
      <form className="flight__form" onSubmit={handleSubmit}>
        <label>
          <div className="flight__label">Odkud:</div>
          <select
            value={flights.map((flight) => console.log(flight.from))}
            onChange={(e) => setFromCity(e.target.value)}
          >
            <option value="">Vyberte</option>
            {flights.map((flight) => (
              <option key={flight.id} value={flight.from}>
                {flight.from}
              </option>
            ))}
          </select>
        </label>
        <label>
          <div className="flight__label">Kam:</div>
          <select
            value={flights.map((flight) => flight.to)}
            onChange={(e) => setToCity(e.target.value)}
          >
            <option value="">Vyberte</option>
            {flights.map((flight) => (
              <option key={flight.id} value={flight.to}>
                {flight.to}
              </option>
            ))}
          </select>
        </label>
        <label>
          <div className="flight__label">Datum:</div>
          <select
            value={flights.map((flight) => flight.departure)}
            onChange={(e) => setDateDeparture(e.target.value)}
          >
            <option value="">Vyberte</option>
            {flights.map((flight) => (
              <option key={flight.id} value={flight.departure}>
                {flight.departure}
              </option>
            ))}
          </select>
        </label>
        <div className="flight__controls">
          <button className="btn" type="submit">
            Vyhledat spoj
          </button>
        </div>
      </form>
    </div>
  );
};
