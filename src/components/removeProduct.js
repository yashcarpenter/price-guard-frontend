import React, { useState } from 'react';

const RemoveProduct = ({ products, onRemoveProducts }) => {
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const handleCheckboxChange = (productId) => {
    // Toggle the selected state of the product
    setSelectedProductIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(productId)) {
        return prevSelectedIds.filter((id) => id !== productId);
      } else {
        return [...prevSelectedIds, productId];
      }
    });
  };

  const handleRemoveProducts = () => {
    // Call the onRemoveProducts prop with the selected product IDs
    onRemoveProducts(selectedProductIds);
    // Clear the selected product IDs after removal
    setSelectedProductIds([]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Remove Products</h2>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productItem}>
            <input
              type="checkbox"
              checked={selectedProductIds.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <label style={styles.productLabel}>{product.productName}</label>
          </div>
        ))}
      </div>
      <button style={styles.button} onClick={handleRemoveProducts}>
        Remove Selected Products
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  productList: {
    marginBottom: '15px',
  },
  productItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  productLabel: {
    marginLeft: '10px',
  },
  button: {
    backgroundColor: '#d9534f',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default RemoveProduct;
