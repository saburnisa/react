import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BusOptions.css';

const BusOptions = ({ journeyDetails, selectBus }) => {
  const navigate = useNavigate();

  const handleSelectBus = (bus) => {
    selectBus(bus);
    navigate('/seating-details'); 
  };

  return (
    <div className='bus'>
      <div className='dd'>
        <center>
          <h2>Available Buses from {journeyDetails.origin} to {journeyDetails.destination}</h2>
        </center>
        <center>
          <ul>
            {journeyDetails.buses.map(bus => (
              <li key={bus.id}>
                {bus.name}<br /> {bus.time}<br />- ₹{bus.fare}
                <button onClick={() => handleSelectBus(bus)}>Select</button>
              </li>
            ))}
          </ul>
        </center>
      </div>
    </div>
  );
};

export default BusOptions;
