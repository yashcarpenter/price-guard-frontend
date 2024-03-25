import React, { useState, useEffect } from 'react';

const RemoveProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/product/y@y', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRemoveProduct = (productUrl) => {
    const userEmail = 'y@y'; // Replace this with dynamic user email if needed
  
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
        <div style={{display: "grid", alignItems: "center", justifyContent: "center", height:"10vh"}}><h1>Product Table</h1></div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product URL </th>
              <th>Product Name</th>
              {/* <th>User Email</th> */}
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
                {/* <td>{product.userEmail}</td> */}
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
  removeButton: {
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default RemoveProduct;
