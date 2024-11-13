import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import BusOptions from './components/BusOptions';
import SeatingDetails from './components/SeatingDetails';
import Payment from './components/Payment';
import Sign from './components/Register';
import Login from './components/login';

const App = () => {
  const [journeyDetails, setJourneyDetails] = useState({});
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const proceedToBusOptions = (details) => {
    setJourneyDetails(details);
  };

  const selectBus = (bus) => {
    setSelectedBus(bus);
  };

  const proceedToPayment = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home proceedToBusOptions={proceedToBusOptions} />} />
        <Route path="/bus-options" element={<BusOptions journeyDetails={journeyDetails} selectBus={selectBus} />} />
        <Route path="/seating-details" element={<SeatingDetails selectedBus={selectedBus} proceedToPayment={proceedToPayment} />} />
        <Route path="/payment" element={<Payment selectedBus={selectedBus} selectedSeats={selectedSeats} />} />
        <Route path='/' element={<App/>}/>
      <Route path='/signup' element={<Sign/>}/>
      <Route path='/Login' element={<Login/>}/>
        <Route path="*" element={<Navigate to="/" />} /> {/* Default route for unhandled URLs */}
      </Routes>
    </Router>
  );
};

export default App;
