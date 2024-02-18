import React, { useState, useEffect } from 'react';

const RemoveProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/product/john.doe@example.com')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Product Table</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product URL</th>
            <th>Product Name</th>
            <th>User Email</th>
            <th>Min Price</th>
            <th>Limit Price</th>
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
            </tr>
          ))}
        </tbody>
      </table>
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
