import React from 'react';

export const FlightDetails = ({ selectedFlight }) => {
  return (
    <div className="flight__details">
      <h2>Selected Flight</h2>
      <div>From: {selectedFlight.from}</div>
      <div>To: {selectedFlight.to}</div>
      <div>Departure: {selectedFlight.departure}</div>
      <div>Arrival: {selectedFlight.arrival}</div>
      <div>Duration: {selectedFlight.duration}</div>
      <div>Price: {selectedFlight.price}</div>
    </div>
  );
};
