import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to authenticate user
      const response = await fetch(`http://localhost:8081/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        // If authentication is successful, redirect to welcome page
        navigate('/');
      } else if (response.status === 401) {
        // If unauthorized, display appropriate error message
        setError(data);
      } else {
        // Handle other error cases
        setError('An error occurred while signing in');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An error occurred while signing in');
    }
  };

  return (
    <div style={{ height: '80vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
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
          {error && <div style={{ marginTop: '10px', color: 'red' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
