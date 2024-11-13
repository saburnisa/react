import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ selectedBus, selectedSeats = [], selectedBerths = [] }) => {
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [uPIid, setUPIid] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); 
  const [showModal, setShowModal] = useState(false); 


  const totalFare = selectedBus?.fare * (selectedSeats.length + selectedBerths.length);

 
  const handlePayment = () => {
    if (!passengerName || !passengerEmail) {
      alert('Please fill in passenger details.');
      return;
    }

    if (paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card' || paymentMethod === 'Net Banking') {
 
      if (!cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all card details.');
        return;
      }
    } else if (paymentMethod === 'UPI') {

      if (!uPIid) {
        alert('Please enter your UPI ID.');
        return;
      }
    }

    setIsPaymentSuccessful(true);
    setShowModal(true);
  };

 
  const closeModal = () => {
    setShowModal(false);
    window.location.reload(); 
  };

  return (
    <div className='paydiv'>
      <div className="payment-container">
        <h3>Payment Details</h3>
        <p>Bus: {selectedBus?.name}</p>

       
        {selectedSeats.length > 0 && (
          <p>Seats: {selectedSeats.map(seat => seat + 1).join(', ')}</p>
        )}

   
        {selectedBerths.length > 0 && (
          <p>Berths: {selectedBerths.map(berth => berth + 1).join(', ')}</p>
        )}

        <p>Total Fare: ₹{totalFare}</p>

       
        <div className="passenger-details">
          <input
            type="text"
            placeholder="Passenger Name"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Passenger Email"
            value={passengerEmail}
            onChange={(e) => setPassengerEmail(e.target.value)}
          />
        </div>

        
        <div className="payment-method">
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </label>
        </div>

       
        {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card' || paymentMethod === 'Net Banking') && (
          <div className="card-details">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        )}

       
        {paymentMethod === 'UPI' && (
          <div className="upi-details">
            <input
              type="text"
              placeholder="UPI ID"
              value={uPIid}
              onChange={(e) => setUPIid(e.target.value)}
            />
          </div>
        )}

        <button onClick={handlePayment}>Pay Online</button>
      </div>

     
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <center>
              <div className="success-icon"></div> {/* This is a tick mark */}
              <h2 className='h22'>Payment Successful!</h2>
              <p>Your payment has been successfully processed.</p>
              <button className="close-button" onClick={closeModal}>Close</button>
            </center>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
