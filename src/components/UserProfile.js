import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Import your CSS file for styling

function UserProfile() {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:8081/api/user/getdetails', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }, // Assuming JSON
          body: JSON.stringify({ username: 'your_username_here' }), // Replace with your username
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Could not fetch user details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {isLoading && <p>Loading user details...</p>}
      {error && <p className="error">{error}</p>}
      {userDetails && (
        <table className="user-details-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {userDetails ? (
              Object.entries(userDetails).map(([key, value]) => (
                <tr key={key}>
                  <td>{key.toUpperCase()}</td>
                  <td>{key === 'password' ? '(hidden)' : value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No user data available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserProfile;
