// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Fetching users from db.json using Axios
//       const response = await axios.get('http://localhost:3000'); // Ensure this URL points to your db.json
//       const users = response.data.users; // Access the users array

//       // Validate the credentials against the fetched user data
//       const validUser = users.find(user => 
//         user.username.trim() === username.trim() && 
//         user.password.trim() === password.trim()
//       );

//       if (validUser) {
//         alert("LOGIN SUCCESSFUL");
//         navigate('/', { state: { email: validUser.email } }); 
//       } else {
//         setErrorMessage("Invalid Username or Password");
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       setErrorMessage("An error occurred. Please try again later.");
//     }
//   };

//   const handlesign = () => {
//     navigate('/signup');
//   };

//   return (
//     <>
//       <h1>RideReserve</h1>
//       <div className="sty">
//         <form onSubmit={handleSubmit}>
//           <div className='sty1'>
//             <br />
//             <center><h2>LOGIN</h2></center>
//             <br />
//             <center>
//               <h5 className='hhh'>USERNAME:</h5>
//               <br />
//               <input 
//                 type="text"
//                 id="in1"
//                 className='form'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required 
//                 style={{ backgroundColor: 'white', color: 'black', width: '250px' }}
//               />
//               <br /><br />
//               <h5 className='hhh'>PASSWORD:</h5>
//               <br />
//               <input 
//                 className='form'
//                 type="password"
//                 id="in2"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required 
//                 style={{ backgroundColor: 'white', color: 'black', width: '250px', height: '30px' }}
//               />
//               <br /><br />
//               {errorMessage && <p className="login-error">{errorMessage}</p>} {/* Display error message if invalid */}
//               <button className="btn btn-primary">Submit</button>
//               <br /><br />
//               <h5>Create an Account?</h5>
//               <button 
//                 style={{ color: 'blue' }} 
//                 onClick={handlesign} 
//                 type="button" // Prevent form submission on this button
//               >
//                 Register here!!
//               </button>
//             </center>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;


      const validUser = users.find(user => 
        user.username.trim() === username.trim() && 
        user.password.trim() === password.trim()
      );

      if (validUser) {
        navigate('/', { state: { email: validUser.email } }); 
      } else {
        setErrorMessage("Invalid Username or Password");
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handlesign = () => {
    navigate('/signup');
  };

  return (
    <>
      <h1>RideReserve</h1>
      <div className="sty">
        <form onSubmit={handleSubmit}>
          <div className='sty1'>
            <br />
            <center><h2>LOGIN</h2></center>
            <br />
            <center>
              <h5 className='hhh'>USERNAME:</h5>
              <br />
              <input 
                type="text"
                id="in1"
                className='form'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
                style={{ backgroundColor: 'white', color: 'black', width: '250px' }}
              />
              <br /><br />
              <h5 className='hhh'>PASSWORD:</h5>
              <br />
              <input 
                className='form'
                type="password"
                id="in2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                style={{ backgroundColor: 'white', color: 'black', width: '250px', height: '30px' }}
              />
              <br /><br />
              {errorMessage && <p className="login-error">{errorMessage}</p>} 
              <button className="btn btn-primary">Submit</button>
              <br /><br />
              <h5>Create an Account?</h5>
              <button 
                style={{ color: 'blue' }} 
                onClick={handlesign} 
                type="button"
              >
                Register here!!
              </button>
            </center>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
