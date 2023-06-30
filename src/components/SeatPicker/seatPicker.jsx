import React from 'react';
// import { flights } from '../Flight/flights';

export const SeatPicker = ({ selectedFlight }) => {
  return (
    <div className="seats">
      <form>
        <div>
          <span>
            {' '}
            A1 -{' '}
            {selectedFlight.seats.find((object) => object.id === 1)
              .available ? (
              <input type="checkbox" className="number__of__seat"></input>
            ) : (
              'Obsazené'
            )}{' '}
          </span>
        </div>
        <div>
          <span>
            {' '}
            A2 -{' '}
            {selectedFlight.seats.find((object) => object.id === 2)
              .available ? (
              <input type="checkbox" className="number__of__seat"></input>
            ) : (
              'Obsazené'
            )}
          </span>
        </div>
        <div>
          <span>
            {' '}
            B1 -{' '}
            {selectedFlight.seats.find((object) => object.id === 3)
              .available ? (
              <input type="checkbox" className="number__of__seat"></input>
            ) : (
              'Obsazené'
            )}
          </span>
        </div>
        <div>
          <span>
            {' '}
            B2 -{' '}
            {selectedFlight.seats.find((object) => object.id === 4)
              .available ? (
              <input type="checkbox" className="number__of__seat"></input>
            ) : (
              'Obsazené'
            )}
          </span>
        </div>
        <div className="flight__controls">
          <button type="submit">Rezervovat</button>
        </div>
      </form>
    </div>
  );
};
