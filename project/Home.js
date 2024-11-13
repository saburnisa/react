import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = ({ proceedToBusOptions }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

 
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = async () => {
    if (origin && destination) { 
      try {
        const response = await axios.get('http://localhost:3000/buses', {
          params: {
            origin,
            destination
          }
        });
        const buses = response.data.filter(
          (bus) => bus.origin === origin && bus.destination === destination
        );

        if (buses.length > 0) {
          proceedToBusOptions({ origin, destination, date, buses: buses.map(bus => bus.options).flat() });
          navigate('/bus-options');
        } else {
          setErrorMessage('No buses available for the selected route.');
        }
      } catch (error) {
        console.error('Error fetching bus data:', error);
        setErrorMessage('There was an issue fetching buses. Please try again later.');
      }
    } else {
      setErrorMessage('Please fill out all fields!');
    }
  };
  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div>
      <div id="one">
        <h1 id="tit">RideReserve</h1>
      </div>
      <nav className="nav-menu">
        <a href="#">TicketBooking</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button onClick={handleLogin}>Login</button>
      </nav>

      <div className="div1">
        <div className="div2">
          <center>
            <label>
              From:
              <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            </label>
            <label>
              To:
              <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </label><br />
            <label>
              Date of Journey:<br />
              <input
                type="date"
                value={date}
                className="input1"
                onChange={(e) => setDate(e.target.value)}
                min={getTodayDate()}
                style={{ width: '200px', height: '30px' }}
              />
            </label>
          </center>

          {errorMessage && (
            <center>
              <p style={{ color: 'red' }}>{errorMessage}</p>
            </center>
          )}

          <center>
            <button onClick={handleSubmit}>Search Buses</button>
          </center>
        </div>
      </div>

       <div id="offers" className="offers-section">
        <h2>Current Offers</h2>
        <div className="offers-container">
          <div className="offer-card">Get 20% off on your first booking!</div>
          <div className="offer-card">Refer a friend and earn travel credits.</div>

          <div className="offer-card">Exclusive weekend discounts on select routes.</div>
          <div className="offer-card">Flat ₹100 cashback on bookings above ₹500.</div>
        </div>
      </div>
      {/* About Section */}
      <div id="about" className="about-section">
        <h2>About RideReserve</h2>
        <p>
          RideReserve is your go-to platform for convenient bus travel bookings.</p><p> Whether you're planning a weekend getaway or a long-distance journey, we've got you covered! 
          Our platform is designed to offer a seamless and hassle-free experience in reserving bus tickets.</p><p> With a wide network of routes and bus operators, 
          you can compare options and choose what suits you best.</p><p> We prioritize comfort, affordability, and customer satisfaction, making your travel experience memorable.
        </p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: ridereserve@gmail.com</p>
        <p>Phone: 040-61656768</p>
      </div>
   

    </div>
  );
};

export default Home;
