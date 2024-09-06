import React, { useState } from 'react';
import './Home.css';

const Home = ({ proceedToBusOptions }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (origin && destination && date) {
      proceedToBusOptions({ origin, destination, date });
    }
  };

  return (
    <div>
      <div id="one">
        <h1 id="tit">RideReserve</h1>
        {/* <h3 id="quo">To travel is to live!!!</h3> */}
      </div>
      <nav className="nav-menu">
        <a href="#">TicketBooking</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className='div1'>
        <div className="div2">
          <center>
            <label>
              From:
              <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            </label>
            <label>
              To:
              <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </label><br></br>
            <label>
              Date of Journey:<br></br>
              <input type="date" value={date} className='input1' onChange={(e) => setDate(e.target.value)} style={{width:'200px',height:'30px'}}/>
            </label>
          </center>

          <center>
            <button onClick={handleSubmit}>Search Buses</button>
          </center>
        </div>
      </div>

      {/* Offers Section */}
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
        <p>Email: support@ridereserve.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 1234 Travel Street, Wander City, WC 56789</p>
      </div>
    </div>
  );
};

export default Home;
