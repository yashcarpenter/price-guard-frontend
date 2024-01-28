import React, { useState } from 'react';
import './CSS/AddProduct.css';

const AddProduct = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productURL, setProductURL] = useState('');
  const [desiredPrice, setDesiredPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields if needed
    // Call the onSubmit prop with the form data
    onSubmit({
      productName,
      productURL,
      desiredPrice: parseFloat(desiredPrice), // Convert to a number if necessary
    });
    // Reset the form fields after submission
    setProductName('');
    setProductURL('');
    setDesiredPrice('');
  };

  return (
    <div style={{height:'100vh'}}>
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
            type="url"
            value={productURL}
            onChange={(e) => setProductURL(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Desired Price:
          <input
            type="number"
            value={desiredPrice}
            onChange={(e) => setDesiredPrice(e.target.value)}
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
