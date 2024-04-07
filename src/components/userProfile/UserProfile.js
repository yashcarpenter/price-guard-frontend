import './userProfile.css';
import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import PleaseSignIn from '../dialougeBox/PleaseLogin';

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const { data, updateData } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:8081/api/user/getUser/${data.email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Please Login');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          setResponseData(data);
        } else {
          console.error('Empty response from API');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [data.email]);

  const updateUserField = async (fieldName, newValue) => {
    try {
      const params = new URLSearchParams();
      params.append(`new${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`, newValue); // Capitalize the fieldName
      params.append('email', responseData.email);
  
      const response = await fetch(`http://localhost:8081/api/user/update${fieldName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const updatedUser = await response.json();
      setResponseData(updatedUser); // Update the state with the updated user data
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if(!data.isLoggedIn){
    return <PleaseSignIn/>;
  }

  // if (error) {
  //   return <PleaseSignIn/>;
  // }

  return (
    <div className="outer-container-1">
      <h1 className="user-profile-heading">User Profile</h1>
      <div className="user-profile-table-container">
        <table className="user-profile-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={responseData.email}>
              <td>{responseData.userName}</td>
              <td>{responseData.name}</td>
              <td>{responseData.email}</td>
              <td>{responseData.mobileNumber}</td>
              <td>
                <div className="user-profile-action-buttons">
                  <ChangeFieldButton
                    label="Email"
                    fieldName="Email"
                    onFieldChange={(newValue) => updateUserField('Email', newValue)}
                  />
                  <ChangeFieldButton
                    label="Password"
                    fieldName="Password"
                    onFieldChange={(newValue) => updateUserField('Password', newValue)}
                  />
                  <ChangeFieldButton
                    label="Mobile Number"
                    fieldName="MobileNumber"
                    onFieldChange={(newValue) => updateUserField('MobileNumber', newValue)}
                  />
                  <ChangeFieldButton
                    label="Username"
                    fieldName="UserName"
                    onFieldChange={(newValue) => updateUserField('UserName', newValue)}
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
        <button className="change-field-button" onClick={handleToggleEditMode}>
          Change {label}
        </button>
      ) : (
        <div className="input-container">
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="input-field"
          />
          <button className="save-button" onClick={handleFieldChange}>
            Save
          </button>
          <button className="cancel-button" onClick={handleToggleEditMode}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
