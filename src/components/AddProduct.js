import React, { useState, useContext } from 'react';
import UserDataContext from '../context/userDataContext';

const AddProduct = ({ onSubmit = () => {} }) => {
  const [productName, setProductName] = useState('');
  const [productURL, setProductURL] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const userData = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const productData = {
      productName: productName,
      url: productURL,
      limitPrice: parseFloat(limitPrice),
      userEmail: userEmail
    };
  
    try {
      // Make the API call
      const response = await fetch('http://localhost:8081/api/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      // Check if the request was successful
      if (response.ok) {
        // Call the onSubmit prop with the form data
        if (typeof onSubmit === 'function') {
          onSubmit(productData);
        } else {
          console.error('onSubmit is not a function');
        }
  
        // Reset the form fields after successful submission
        setProductName('');
        setProductURL('');
        setLimitPrice('');
        setUserEmail('');
      } else {
        console.error('Failed to add product. HTTP status:', response.status);
      }
    } catch (error) {
      console.error('Error while adding product:', error);
    }
  };

  return (
    <div style={{ height: '70vh', margin:'5vh', textAlign: 'center', color: '#333' }}>
      <h2 style={{margin: '10vh'}}>Add a New Product</h2>
      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '5vh' }} onSubmit={handleSubmit}>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Product Name:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Product URL:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            type="text"
            value={productURL}
            onChange={(e) => setProductURL(e.target.value)}
            required
          />
        </label>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Limit Price:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            type="number"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            required
          />
        </label>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          User Email:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </label>
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
