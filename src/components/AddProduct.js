import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import PleaseLogin from './dialougeBox/PleaseLogin';

const AddProduct = ({ onSubmit = () => {} }) => {
  const [productName, setProductName] = useState('');
  const [productASIN, setProductASIN] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const { data, updateData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const productData = {
      productName: productName,
      productAsin: productASIN,
      limitPrice: parseFloat(limitPrice),
      userEmail: data.email
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
        setProductASIN('');
        setLimitPrice('');
      } else {
        console.error('Failed to add product. HTTP status:', response.status);
      }
    } catch (error) {
      console.error('Error while adding product:', error);
    }
  };
  if(!data.isLoggedIn){
    return <PleaseLogin/>;
  }
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
          Product ASIN:
          <input
            style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
            type="text"
            value={productASIN}
            onChange={(e) => setProductASIN(e.target.value)}
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
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
