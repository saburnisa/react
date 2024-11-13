import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import './Register.css';

const Sign = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleClick = (event) => {
        event.preventDefault(); 

        const newUser = {
            username: username,
            email: email, 
            password: password
        };
        
        axios.post('http://localhost:3000/users', newUser)  
            .then((response) => {
                navigate('/');  
            })
            .catch((error) => {
                console.error("There was an error posting the data!", error);
                alert("Error in registration!");
            });
    };

    const handleLoginRedirect = () => {
        navigate('/Login');
    };

    return (
        <>
            <h1>RideReserve</h1>
            <div className="styy">
                <form onSubmit={handleClick}>
                    <div className='sty11'>
                        <center><h2>REGISTER</h2></center>
                        <br></br>
                        <center>
                            <h5 className='hhhh'>USERNAME:</h5>
                            <br></br>
                            <input 
                                type="text"
                                id="in1"
                                className='form-control'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required 
                                style={{backgroundColor:'white', color:'black', width:'250px'}}
                            />
                            <br /><br />
                            <h5 className='hhhh'>EMAIL:</h5>  {/* New Email Field */}
                            <br />
                            <input  
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                style={{backgroundColor:'white', color:'black', width:'250px', height:'30px'}}
                            />
                            <br /><br />
                            <h5 className='hhhh'>PASSWORD:</h5>
                            <br />
                            <input  
                                className="form-control"
                                type="password"
                                id="in2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                                style={{backgroundColor:'white', color:'black', width:'250px', height:'30px'}}
                            />
                            <br /><br />
                            <button type="submit" className="btn btn-warning">Submit</button>
                            <br></br>
                            <h5>Already have an account?</h5>
                            <button 
                                style={{color:'blue'}} 
                                type="button" 
                                onClick={handleLoginRedirect}
                            >
                                Login here
                            </button>
                        </center>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Sign;
