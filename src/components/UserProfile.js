import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/api/user/getUser/yash@example.com')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          setUserData(data);
        } else {
          console.error('Empty response from API');
        }
        setLoading(false); // Set loading to false after fetching data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const updateUserField = (email, fieldName, newValue) => {
    // Your update logic here
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ height: '85vh' }}>
      <h1 style={styles.heading}>User Profile</h1>
      <div style={{display:'flex', justifyContent:'center'}}>
      <table style={styles.table} >
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Mobile Number</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody style={styles.tbody}>
          <tr key={userData.email} style={styles.tr}>
            <td style={styles.td}>{userData.userName}</td>
            <td style={styles.td}>{userData.name}</td>
            <td style={styles.td}>{userData.email}</td>
            <td style={styles.td}>{userData.mobileNumber}</td>
            <td style={styles.td}>
              <div style={styles.buttonContainer}>
                <ChangeFieldButton
                  label="Email"
                  fieldName="Email"
                  onFieldChange={(newValue) => updateUserField(userData.email, 'Email', newValue)}
                />
                <ChangeFieldButton
                  label="Password"
                  fieldName="Password"
                  onFieldChange={(newValue) => updateUserField(userData.email, 'Password', newValue)}
                />
                <ChangeFieldButton
                  label="Mobile Number"
                  fieldName="MobileNumber"
                  onFieldChange={(newValue) => updateUserField(userData.email, 'MobileNumber', newValue)}
                />
                <ChangeFieldButton
                  label="Username"
                  fieldName="UserName"
                  onFieldChange={(newValue) => updateUserField(userData.email, 'UserName', newValue)}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
  );
};

const ChangeFieldButton = ({ label, fieldName, onFieldChange }) => {
  const [editMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState('');

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
    setNewValue(''); // Clear the input field when toggling edit mode
  };

  const handleFieldChange = () => {
    if (newValue.trim() !== '') {
      onFieldChange(newValue.trim());
      setEditMode(false);
    }
  };

  return (
    <div>
      {!editMode ? (
        <button style={styles.button} onClick={handleToggleEditMode}>
          Change {label}
        </button>
      ) : (
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button style={styles.changeButton} onClick={handleFieldChange}>
            Save
          </button>
          <button style={styles.changeButton} onClick={handleToggleEditMode}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
  },
  heading: {
    marginBottom: '20px',
    marginTop:'20px',
    textAlign: 'center',
  },
  table: {
    width: '80vw',
    marginTop: '20px',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  thead: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  th: {
    padding: '15px',
    textAlign: 'left',
  },
  tbody: {
    backgroundColor: '#fff',
  },
  tr: {
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '15px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  changeButton:{
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  cancelButton: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


export default UserProfile;
