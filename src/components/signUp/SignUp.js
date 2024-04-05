import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signUp.css';


const SignupPage = () => {
  const [userDto, setUserDto] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDto((prevUserDto) => ({
      ...prevUserDto,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setErrorMessage(null);
    setSuccessMessage(null);

    // Call the registration API
    fetch('http://localhost:8081/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDto),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('User registered successfully!');
        } else {
          return response.text();
        }
      })
      .then((errorText) => {
        setErrorMessage(errorText);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setErrorMessage('Error registering user');
      });
  };

  return (
    <div id='signup-outer-container'>
        <div id='signup-div'>
        <div className='signup-heading-div'><h2 className='signup-heading'>Signup</h2></div>
        <form id='singup-form' onSubmit={handleSubmit}>
          <div className='signup-input'>
          <label htmlFor="email">Username</label>
            <div className="sec-2">
                <input
                placeholder="Username@gmail.com" 
                type="text" 
                name="userName" 
                value={userDto.userName} 
                onChange={handleChange} 
                required />
            </div>
          </div>
          <div className='signup-input'>
          <label htmlFor="firstname">First Name</label>
            <div className="sec-2">
            <input
                placeholder="Yash" 
                type="text" 
                name="firstname" 
                value={userDto.firstName} 
                onChange={handleChange} 
                required />
            </div>
          </div>
          <div className='signup-input'>
          <label htmlFor="lastname">Last Name</label>
            <div className="sec-2">
            <input
              placeholder="Carpenter"
              type="text" 
              name="lastName" 
              value={userDto.lastName} 
              onChange={handleChange} 
              required
            />
            </div>
          </div>
          <div className='signup-input'>
          <label htmlFor="password">Mobile Number</label>
            <div className="sec-2">
            <input
              placeholder="Mobile Number"
              type="text" 
              name="mobileNumber" 
              value={userDto.mobileNumber} 
              onChange={handleChange} 
              required 
            />
            </div>
          </div>
          <div className='signup-input'>
          <label htmlFor="password">Email</label>
            <div className="sec-2">
            <input
              placeholder="············"
              type="email" 
              name="email" 
              value={userDto.email} 
              onChange={handleChange} 
              required
            />
            </div>
          </div>
          <div className='signup-input'>
          <label htmlFor="password">Password</label>
            <div className="sec-2">
            <input
              placeholder="············"
              type="password" 
              name="password" 
              value={userDto.password} 
              onChange={handleChange} 
              required
            />
            </div>
          </div>
          <button className="signup-submit-button" type="submit">Login</button>
          <div className='signup-signup-div'>
            <Link to="/signup">
              <button className='signup-signup-button'>Signup</button>
            </Link>
          </div>
        </form>
        </div>
    </div>
  );
};


export default SignupPage;
