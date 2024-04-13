import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/authContext/AuthContext';
import Chart from 'chart.js/auto';
import './priceChart.css'

function PriceChart() {
  const { productData } = useContext(AuthContext);

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/price/getprices/${productData.asin}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Extract labels and dataset values from the response
        const labels = data.map(entry => formatDateTime(entry.timestamp));
        const datasetValues = data.map(entry => entry.price);

        // Determine maximum and minimum price values
        const maxPrice = Math.max(...datasetValues);
        const minPrice = Math.min(...datasetValues);

        // Calculate y-axis minimum and maximum values with buffer
        const yMin = Math.floor(minPrice / 100) * 100; // Round down to nearest 100
        const yMax = Math.ceil(maxPrice / 100) * 100; // Round up to nearest 100

        // Create chart with advanced styling
        const config = {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Price',
              data: datasetValues,
              borderColor: 'rgba(3, 169, 244, 1)', // Light blue
              backgroundColor: 'rgba(3, 169, 244, 0.3)', // Transparent light blue fill
              borderWidth: 2, // Thicker line
              pointRadius: 5, // Larger data point markers
              pointBorderColor: 'rgba(3, 169, 244, 1)', // Matches line color
              pointBackgroundColor: 'white', // White data point fill
              pointHoverRadius: 7, // Increase hover size
              pointHoverBackgroundColor: 'rgba(3, 169, 244, 0.8)', // Highlight on hover
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
                min: yMin,
                max: yMax,
                ticks: {
                  stepSize: 100,
                  callback: (value, index, values) => { // Custom Y-axis label formatting (optional)
                    return 'Rs.' + value; // Add dollar sign prefix
                  }
                }
              }
            },
            title: {
              display: true,
              text: 'Price History',
              fontSize: 18,
              fontColor: '#303030' // Darker title color
            },
            legend: {
              display: true,
              labels: {
                fontColor: '#666'
              }
            },
            elements: {
              line: {
                tension: 0.4, // Add slight curve to the line
              }
            }
          }
        };

        const myChart = new Chart("myChart", config);

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
          myChart.destroy();
        };
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="price-graph-main-div">
      <div className='price-graph-title'>
      <p>
        <h1>Product Name:</h1> <h2>{productData.productName}</h2>
      </p>
      </div>
      <div className='price-chart-inner-div'>
        <div className="price-chart-container">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default PriceChart;
