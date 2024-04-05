import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import PleaseLogin from './dialougeBox/PleaseLogin';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { data, asin, updateAsin } = useContext(UserContext);

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  console.log(asin.asin);
  useEffect(() => {
    fetch(`http://localhost:8081/api/product/${data.email}`, {
      method: 'POST',
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

  const handleRemoveProduct = (productAsin) => {
    const userEmail = data.email;
    // API call to remove the product with the given productAsin and user email
    fetch(`http://localhost:8081/api/product/delete/${userEmail}?productAsin=${encodeURIComponent(productAsin)}`, {
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          // Remove the product from the local state
          setProducts(prevProducts => prevProducts.filter(product => product.productAsin !== productAsin));
        } else {
          console.error('Failed to remove product:', response.statusText);
        }
      })
      .catch(error => console.error('Error removing product:', error));
  };

  const handleGraphOnClick = (asin) =>{
    updateAsin(asin);
    navigate('/graph');
  }

  if (!data.isLoggedIn) {
    return <PleaseLogin />;
  } else {
    return (
      <div style={{ height: "100vh" }}>
        <div className="container mt-5">
          <div style={{ display: "grid", alignItems: "center", justifyContent: "center", height: "10vh" }}><h1>Product Table</h1></div>
          <div style={{ display: "grid", alignItems: "center", justifyContent: "center"}}>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Graph</th>
                <th>Product ASIN </th>
                <th>Product Name</th>
                <th>Added At</th>
                <th>Limit Price</th>
                <th>Last Price</th>
                <th>Min Price</th>
                <th>Min Price Was At</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.productAsin}>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleGraphOnClick(product.productAsin)}
                    >
                      Graph
                    </button>
                  </td>
                  <td>{product.productAsin}</td>
                  <td>{product.productName}</td>
                  <td>{formatDateTime(product.productAddedAt)}</td>
                  <td>{product.limitPrice}</td>
                  <td>{product.lastPrice}</td>
                  <td>{product.minPrice}</td>
                  <td>{formatDateTime(product.lastMinPriceAt)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveProduct(product.productAsin)}
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
      </div>
    );
  }
};

export default ProductList;
