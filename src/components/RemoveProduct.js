import React, { useState, useEffect } from 'react';

const RemoveProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/product/yash@example.com')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRemoveProduct = (productUrl) => {
    const userEmail = 'yash@example.com'; // Replace this with dynamic user email if needed
  
    // API call to remove the product with the given productUrl and user email
    fetch(`http://localhost:8081/api/product/delete/${userEmail}?url=${encodeURIComponent(productUrl)}`, {
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          // Remove the product from the local state
          setProducts(prevProducts => prevProducts.filter(product => product.productUrl !== productUrl));
        } else {
          console.error('Failed to remove product:', response.statusText);
        }
      })
      .catch(error => console.error('Error removing product:', error));
  };
  

  return (
    <div style={{height:"100vh"}}>
      <div className="container mt-5">
        <h1>Product Table</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product URL </th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>Min Price</th>
              <th>Limit Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.productUrl}>
                <td>{product.productUrl}</td>
                <td>{product.productName}</td>
                <td>{product.userEmail}</td>
                <td>{product.minPrice}</td>
                <td>{product.limitPrice}</td>
                <td>
                  <button
                    style={styles.removeButton}
                    onClick={() => handleRemoveProduct(product.productUrl)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
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
