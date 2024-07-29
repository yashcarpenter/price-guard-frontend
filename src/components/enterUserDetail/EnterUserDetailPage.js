import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/AuthContext';
import './EnterUserDetailPage.css';


const EnterUserDetailPage = () => {
  const navigate = useNavigate();
  const [userDto, setUserDto] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const { data, updateData } = useContext(AuthContext);
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
          updateData(userDto.userName, userDto.password, userDto.email, true);
          navigate('/');
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
    <div className='signup-outer-container'>
        <div className='signup-div'>
        <div className='signup-heading-div'><h2 className='signup-heading'>Register</h2></div>
        <form className='singup-form' onSubmit={handleSubmit}>
          <div className='signup-input-div'>
            <label htmlFor="password">Email</label>
            <div className="signup-form-input">
            <input
              placeholder="username@gmail.com"
              type="email" 
              name="email" 
              value={userDto.email} 
              onChange={handleChange} 
              required
            />
            </div>
          </div>
          <div className='signup-input-div'>
          <label htmlFor="firstname">First Name</label>
            <div className="signup-form-input">
            <input
                placeholder="Yash" 
                type="text" 
                name="firstName" 
                value={userDto.firstName} 
                onChange={handleChange} 
                required />
            </div>
          </div>
          <div className='signup-input-div'>
          <label htmlFor="lastname">Last Name</label>
            <div className="signup-form-input">
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
          <div className='signup-input-div'>
          <label htmlFor="password">Mobile Number</label>
            <div className="signup-form-input">
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
          <div className='signup-input-div'>
          <label htmlFor="email">Username</label>
            <div className="signup-form-input">
                <input
                placeholder="yashcarpenter" 
                type="text" 
                name="userName" 
                value={userDto.userName} 
                onChange={handleChange} 
                required />
            </div>
          </div>
          <div className='signup-input-div'>
          <label htmlFor="password">Password</label>
            <div className="signup-form-input">
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
          <div className='signup-submit-div'>
          <button className="signup-submit-button" type="submit">Regsiter</button>
          </div>
          <div className='signup-signin-div'>
            <Link to="/signin">
              <button className='signup-signin-button'>Login</button>
            </Link>
          </div>
        </form>
        {errorMessage && <p className="error-message" style={styles.errorMessage}>{errorMessage}</p>}
        {successMessage && <p className="success-message" style={styles.successMessage}>{successMessage}</p>}
        </div>
    </div>
  );
};

const styles = {
  errorMessage: {
    color: '#d9534f',
  },
  successMessage: {
    color: '#5cb85c',
  },
};

export default EnterUserDetailPage;
