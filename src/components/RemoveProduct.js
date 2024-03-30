import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import PleaseLogin from './dialougeBox/PleaseLogin';

const RemoveProduct = () => {
  const [products, setProducts] = useState([]);
  const { data, updateData } = useContext(UserContext);

  useEffect(() => {
      fetch(`http://localhost:8081/api/product/${data.email}`, {
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Please Login');

        }
        return response.json();
      })
      .then(responseData => setProducts(responseData))
      .catch(error => console.error('Error fetching data:', error));
  }, [data.email]);

  const handleRemoveProduct = (productUrl) => {
    const userEmail = data.email;
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

  if(!data.isLoggedIn){
    return <PleaseLogin/>;
  } else{
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
}
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
