import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import PleaseSignIn from '../dialougeBox/PleaseLogin';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from './AddProductSidebar';
import './addProduct.css';

const AddProduct = ({ onSubmit = () => {} }) => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productASIN, setProductASIN] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const { data, updateData } = useContext(UserContext);

  if(!data.isLoggedIn){
    return <PleaseSignIn/>;
  }

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
        navigate('/productlist');
      } else {
        console.error('Failed to add product. HTTP status:', response.status);
      }
    } catch (error) {
      console.error('Error while adding product:', error);
    }
  };
  
  return (
    <>
    <Sidebar/>
    <div className="addproduct-container">
      <h2 className="addproduct-title">Add a New Product</h2>
      <form className="addproduct-form" onSubmit={handleSubmit}>
        <label className="addproduct-label">
          Product Name:
          <input
            className="addproduct-input"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label className="addproduct-label">
          Product ASIN:
          <input
            className="addproduct-input"
            type="text"
            value={productASIN}
            onChange={(e) => setProductASIN(e.target.value)}
            required
          />
        </label>
        <label className="addproduct-label">
          Limit Price:
          <input
            className="addproduct-input"
            type="number"
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            required
          />
        </label>
        <button className="addproduct-button" type="submit">Add Product</button>
      </form>
    </div>
    </>
  );
};

export default AddProduct;
