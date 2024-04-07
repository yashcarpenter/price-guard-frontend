import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/authContext/AuthContext';
import Chart from 'chart.js/auto';

function PriceChart() {
  const { asin } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/price/getprices/${asin.asin}`, {
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
        const labels = data.map(entry => entry.timestamp);
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
    <div style={{height:'85vh', background: '',display: 'grid', justifyContent: 'center', alignItems:'center' }}>
      <div style={{ height: '400px', width: '800px' }}> {/* Adjust chart dimensions as needed */}
        <canvas id="myChart" ></canvas>
      </div>
    </div>
  );
}

export default PriceChart;
