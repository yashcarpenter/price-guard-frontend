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
    <div style={{height:'90vh', display:'grid', alignContent:'center', justifyContent:'center'}}>
      <div className="signup-container" style={styles.signupContainer}>
        <h1 style={styles.header}>Signup Page</h1>
        <form onSubmit={handleSubmit} className="signup-form" style={styles.signupForm}>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Username:</label>
            <input style={styles.input} type="text" name="userName" value={userDto.userName} onChange={handleChange} required />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>First Name:</label>
            <input style={styles.input} type="text" name="firstName" value={userDto.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Last Name:</label>
            <input style={styles.input} type="text" name="lastName" value={userDto.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Mobile Number:</label>
            <input style={styles.input} type="text" name="mobileNumber" value={userDto.mobileNumber} onChange={handleChange} required />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input style={styles.input} type="email" name="email" value={userDto.email} onChange={handleChange} required />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input style={styles.input} type="password" name="password" value={userDto.password} onChange={handleChange} required />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <button style={styles.button} type="submit">Register</button>
          </div>
        </form>

        {errorMessage && <p className="error-message" style={styles.errorMessage}>{errorMessage}</p>}
        {successMessage && <p className="success-message" style={styles.successMessage}>{successMessage}</p>}
      </div>
    </div>
  );
};

const styles = {
  signupContainer: {
    height: '70vh',
    display:'grid',
    width: '50vw',
    justifyContent:'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    boxShadow: '0 0 100px rgba(10, 100, 100, 100)'
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  signupForm: {
    width:'20vw',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  formGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '5px',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    width:'20vh',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  errorMessage: {
    color: '#d9534f',
  },
  successMessage: {
    color: '#5cb85c',
  },
};
  

export default SignupPage;
