import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Sign from './components/Register';
import Home from './components/Home';
//    cess from './components/PaymentSuccess';
import BusOptions from './components/BusOptions';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signup' element={<Sign/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/payment-success' element={<PaymentSuccess/>}/>
      <Route path='/bus-op' element={<BusOptions/>}/>

    </Routes>
   </Router> */}
   <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
