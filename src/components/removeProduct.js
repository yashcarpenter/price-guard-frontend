import React, { useState } from 'react';

const RemoveProduct = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: 'Product A' },
    { id: 2, productName: 'Product B' },
    { id: 3, productName: 'Product C' },
  ]);

  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const handleCheckboxChange = (productId) => {
    setSelectedProductIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(productId)) {
        return prevSelectedIds.filter((id) => id !== productId);
      } else {
        return [...prevSelectedIds, productId];
      }
    });
  };

  const handleRemoveProducts = () => {
    // Implement your logic for removing selected products here
    console.log('Removing products with IDs:', selectedProductIds);
  };

  return (
    <div style={{height:'80vh', display: 'grid', justifyContent:'center', alignItems:'center'}}>
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
        <button style={styles.removeButton} onClick={handleRemoveProducts}>
            Remove Selected Products
        </button>
        </div>
    </div>
  ) 
};

const styles = {
  container: {
    height:'50vh',
    display: 'grid',
    justifyContent:'center',
    alignItems:'center',
    width:'50vw',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  productList: {
    // marginBottom: '15px',
  },
  productItem: {
    display: 'flex',
    alignItems: 'center',
  },
  productLabel: {
    // marginLeft: '10px',
  },
  removeButton: {
    backgroundColor: '#d9534f',
    color: 'white',
    // padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default RemoveProduct;
