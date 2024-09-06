import React, { useState } from 'react';
import Home from './components/Home';
import BusOptions from './components/BusOptions';
import SeatingDetails from './components/SeatingDetails';
import Payment from './components/Payment';

const App = () => {
  const [step, setStep] = useState(1);
  const [journeyDetails, setJourneyDetails] = useState({});
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const proceedToBusOptions = (details) => {
    setJourneyDetails(details);
    setStep(2);
  };

  const selectBus = (bus) => {
    setSelectedBus(bus);
    setStep(3);
  };

  const proceedToPayment = (seats) => {
    setSelectedSeats(seats);
    setStep(4);
  };

  return (
    <div>
      {step === 1 && <Home proceedToBusOptions={proceedToBusOptions} />}
      {step === 2 && <BusOptions journeyDetails={journeyDetails} selectBus={selectBus} />}
      {step === 3 && <SeatingDetails selectedBus={selectedBus} proceedToPayment={proceedToPayment} />}
      {step === 4 && <Payment selectedBus={selectedBus} selectedSeats={selectedSeats} />} 
     
    </div>
  );
};

export default App;
