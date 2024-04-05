import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './signIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const { data, updateData } = useContext(UserContext);

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
        updateData(responseData.userName, responseData.password, responseData.email, true);
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
    <div id='outer-container'>
        <div id='singIn-div'>
        <div className='signin-heading-div'><h2 className='signin-heading'>Log In</h2></div>
        <form id='singIn-form' onSubmit={handleSubmit}>
          <div id="email">
          <label htmlFor="email">Email Address</label>
            <div className="sec-2">
                <input
                placeholder="Username@gmail.com" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
          </div>
          <div id="password">
          <label htmlFor="password">Password</label>
            <div className="sec-2">
            <input
              type="password"
              placeholder="············"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          </div>
          <button className="signin-submit-button" type="submit">Login</button>
          <div className='signin-signup-div'>
            <Link to="/signup">
              <button className='signin-signup-button'>Signup</button>
            </Link>
          </div>
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
