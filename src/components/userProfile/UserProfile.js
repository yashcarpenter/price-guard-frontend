import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import PleaseLogin from '../dialougeBox/PleaseLogin';
import './userProfile.css';

const UserProfile = ()=> {
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

    if (error) {
    return <PleaseLogin/>;
    }

    return(
        <div className="outerContainer">
            <div className="innerContainer">
                <h1 style={{height:'10vh'}}>User Profile</h1>
                <div className='tableContainer'>
                    <table >
                        {/* <thead style={styles.thead}>
                        <tr>
                            <th style={styles.th}>Username</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Mobile Number</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                        </thead> */}
                        <tbody >
                        {/* <tr key={responseData.email}>
                            <td>{responseData.userName}</td>
                            <td>{responseData.email}</td>
                            <td>{responseData.name}</td>
                            <td>{responseData.mobileNumber}</td>
                            <td>
                            <div style={styles.buttonContainer}>
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
                        </tr> */}
                        <tr>
                            <td style={{textAlign: 'right'}}>Name: </td>
                            <td>{responseData.name}</td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'right'}}>User Name: </td>
                            <td>{responseData.userName}</td>
                            <td>
                                <ChangeFieldButton
                                    label="Username"
                                    fieldName="UserName"
                                    onFieldChange={(newValue) => updateUserField('UserName', newValue)}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'right'}}>Email: </td>
                            <td>{responseData.email}</td>
                            <td>
                                <ChangeFieldButton
                                    label="Email"
                                    fieldName="Email"
                                    onFieldChange={(newValue) => updateUserField('Email', newValue)}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'right'}}>Mobile Number: </td>
                            <td>{responseData.mobileNumber}</td>
                            <td>
                                <ChangeFieldButton
                                    label="Mobile Number"
                                    fieldName="MobileNumber"
                                    onFieldChange={(newValue) => updateUserField('MobileNumber', newValue)}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <ChangeFieldButton
                                    label="Password"
                                    fieldName="Password"
                                    onFieldChange={(newValue) => updateUserField('Password', newValue)}
                                    />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

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
          <button className='button' onClick={handleToggleEditMode}>
            Change {label}
          </button>
        ) : (
          <div className='inputContainer'>
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              style={styles.input}
            />
            <button className='changeButton' onClick={handleFieldChange}>
              Save
            </button>
            <button className='changeButton' onClick={handleToggleEditMode}>
              Cancel
            </button>
          </div>
        )}
      </div>
    );
}

const styles = {
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
    }
  };

export default UserProfile;