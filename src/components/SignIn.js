import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to authenticate user
      const response = await fetch('http://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // If authentication is successful, redirect or perform any action
        console.log('Logged in successfully');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Error signing in');
    }
  };

  return (
    <div style={{height:'80vh', display:'grid', justifyContent:'center', alignContent:'center'}}>
        <div style={{height:'50vh', width:'50vh', display:'grid', justifyContent:'center', justifyContent:'center',maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{display:'grid', justifyContent:'center', alignContent:'center'}}>Sign In</h2>
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
        </div>
    </div>
  );
};

export default SignIn;
