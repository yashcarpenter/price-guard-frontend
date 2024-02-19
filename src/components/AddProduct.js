import React, { useState } from 'react';
import './CSS/AddProduct.css';

const AddProduct = ({ onSubmit = () => {} }) => {
  const [productName, setProductName] = useState('');
  const [productURL, setProductURL] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      url: productURL,
      productName,
      userEmail,
      limitPrice: parseFloat(limitPrice)
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

  console.log('Received onSubmit prop:', onSubmit);

  return (
    <div style={{ height: '100vh' }}>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Product URL:
          <input
            type="text"
            value={productURL}
            onChange={(e) => setProductURL(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Limit Price:
          <input
            type="number"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          User Email:
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
