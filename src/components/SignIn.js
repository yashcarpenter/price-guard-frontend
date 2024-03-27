import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); // New state for controlling the pop-up

  // Using context API
  const { data, updateData } = useContext(UserContext);
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8081/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      const responseData = await response.json();
    
      if (response.ok) {
        updateData(responseData.userName, responseData.password, responseData.email);
        console.log(responseData);
        navigate('/');
      } else if (response.status === 401) {
        setError(responseData);
        setShowPopup(true); 
      } else {
        setError('An error occurred while signing in');
        setShowPopup(true); 
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An error occurred while signing in');
      setShowPopup(true);
    }
  }

  return (
    <div style={{ height: '85vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
      <div style={{ height: '50vh', width: '50vh', display: 'grid', justifyContent: 'center', justifyContent: 'center', maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>Sign In</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <div>
            <input
              style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer', fontSize: '16px', transition: 'background-color 0.3s ease' }} type="submit">Sign In</button>
        </form>
        {showPopup && (
          <div style={popupStyles}>
            <p style={{ color: 'red' }}>{error}</p>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 12px', cursor: 'pointer', fontSize: '14px', transition: 'background-color 0.3s ease' }} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Popup styles
const popupStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};



export default SignIn;
