import React from 'react';
import { SeatPicker } from '../SeatPicker/seatPicker';

export const FlightDetails = ({ selectedFlight }) => {
  return (
    <div className="flight__details">
      <h2>Vybraný let</h2>
      <div>Z: {selectedFlight.from}</div>
      <div>Do: {selectedFlight.to}</div>
      <div>Odlet: {selectedFlight.departure}</div>
      <div>Přílet: {selectedFlight.arrival}</div>
      <div>Délka letu: {selectedFlight.duration}</div>
      <div>Cena: {selectedFlight.price}</div>
      <SeatPicker selectedFlight={selectedFlight} />
    </div>
  );
};
