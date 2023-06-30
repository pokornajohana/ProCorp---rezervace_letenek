import React, { useEffect, useState } from 'react';
import { FlightDetails } from '../FlightDetails/flightDetails';
import { flights } from './flights.js';

export const Flight = () => {
  // const [flights, setFlights] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [dateDeparture, setDateDeparture] = useState('');
  const [dateArrival, setDateArrival] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFlight, setSelectedFlight] = useState(null);

  // useEffect(() => {
  //   fetch('https://pastebin.com/LRfGdcJx')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFlights(data);
  //     });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selected = flights.find(
      (flight) => flight.from === fromCity && flight.to === toCity,
    );
    setSelectedFlight(selected);
  };

  return (
    <div className="flight__container">
      <form className="flight__form" onSubmit={handleSubmit}>
        <label>
          <div className="flight__label">Odkud:</div>
          <select
            value={fromCity}
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
            value={toCity}
            // disabled={fromCity ? true : false}
            onChange={(e) => setToCity(e.target.value)}
          >
            <option value="">Vyberte</option>
            {flights.map((flight) => (
              <option key={flight.id} value={flight.to}>
                {flight.to}
              </option>
            ))}
            {}
          </select>
        </label>
        <label>
          <div className="flight__label">Datum odletu:</div>
          <select
            value={dateDeparture}
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
        <label>
          <div className="flight__label">Cena:</div>
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            <option value="">Vyberte</option>
            {flights.map((flight) => (
              <option key={flight.id} value={flight.price}>
                {flight.price}
              </option>
            ))}
          </select>
        </label>
        <div className="flight__controls">
          <button type="submit">Najít let</button>
        </div>
      </form>
      {selectedFlight && <FlightDetails selectedFlight={selectedFlight} />}
    </div>
  );
};
