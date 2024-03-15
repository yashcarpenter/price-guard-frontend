import React, { useState } from 'react';

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
    <div style={{display:'flex', justifyContent:'center', width:'100vw'}}>
    <div className="signup-container" style={styles.signupContainer}>
      <h1 style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>Signup Page</h1>
      <form onSubmit={handleSubmit} className="signup-form" style={styles.signupForm}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="userName" value={userDto.userName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={userDto.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={userDto.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" value={userDto.mobileNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={userDto.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={userDto.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </div>
  );
};

const styles = {
    signupContainer: {
        width:'80vw',
        display: 'grid',
        justifyContent: 'center',
        backgroundColor: 'White',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    signupForm: {
        borderRadius:'20px',
        padding:'20px',
        width:'50vw',
        backgroundColor:'LightGray',
        boxShadow: '0 0 100px rgba(10, 100, 100, 100)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0 100px rgba(10, 100, 100, 100)',
    },
    label: {
      marginBottom: '5px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '10px 10px 10px rgba(10, 10, 10, 10)',
    },
    button: {
      padding: '10px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    buttonHover: {
      backgroundColor: '#45a049',
      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
    },
    errorMessage: {
      color: '#d9534f',
      marginTop: '10px',
    },
    successMessage: {
      color: '#5cb85c',
      marginTop: '10px',
    },
  };
  

export default SignupPage;
