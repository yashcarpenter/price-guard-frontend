import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function PriceChart() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/price/getprices/B0BSRVL2VV', {
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

        // Create chart
        const config = {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Price',
              data: datasetValues,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
                min: yMin,
                max: yMax,
                ticks: {
                  stepSize: 100 // Set interval to 100
                }
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
    <div >
    <div style={{height:'50vh'}}>
      <canvas id="myChart" ></canvas>
    </div>
    </div>
  );
}

export default PriceChart;
