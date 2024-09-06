import React from 'react';
import './BusOptions.css';
const BusOptions = ({ journeyDetails, selectBus }) => {
  const buses = [
    { id: 1, name: '(SBLT) Shri Bhagiyalakshimi Travels (MAARA)',time:'Time:11.00', fare: 1000 },
    { id: 2, name: 'A1 Travels',time:'Time:10.00', fare: 800 },
    { id: 3, name: 'InterCity SmartBus',time:'Time:22.00', fare: 950 },
    { id: 4, name: 'National Travels CHN',time:'Time:20.00', fare: 750 },
    { id: 5, name: 'Krish Travels',time:'Time:19.00', fare: 650 },
    { id: 6, name: 'LION Travels',time:'Time:21.00', fare: 1000 },
    { id: 7, name: 'YBM Travels(BLM)',time:'Time:17.00', fare: 700 },
    { id: 8, name: 'Arthi Travel',time:'Time:18.00', fare: 800 },
    { id: 9, name: 'Essaar',time:'Time:22.30', fare: 1050 },
    { id: 10, name: 'Mayurra Travels',time:'Time:19.45', fare: 900 }
  ];

  return (
    <div className='dd'>
      <center>
      <h2>Available Buses from {journeyDetails.origin} to {journeyDetails.destination}</h2>
      </center>
      <ul>
        {buses.map(bus => (
          <li key={bus.id}>
            {bus.name}<br></br> {bus.time}<br></br>- ₹{bus.fare}
            <button onClick={() => selectBus(bus)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusOptions;

