import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(point => point.label),
        datasets: [{
          label: 'Data Points',
          data: data.map(point => point.value),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
