import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 1.8,
  scales: {
    x: {
      ticks: {
        color: '#1A1B22',
        font: {
          family: "'Roboto Slab', 'Arial', 'Helvetica', sans-serif",
          size: 12
        },
      }
    },
    y: {
      ticks: {
        color: '#1A1B22',
        font: {
          family: "'Roboto Slab', 'Arial', 'Helvetica', sans-serif",
          size: 12
        },
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom',
      align: 'start',
      labels: {
        color: '#1A1B22',
        boxWidth: 10,
        boxHeight: 10,
        font: {
          family: "'Roboto Slab', 'Arial', 'Helvetica', sans-serif",
          size: 12
        },
      }
    },
    tooltip: {
      displayColors: false,
      titleFont: {
        family: "'Roboto Slab', 'Arial', 'Helvetica', sans-serif",
        size: 12,
        weight: 400
      },
      bodyFont: {
        family: "'Roboto Slab', 'Arial', 'Helvetica', sans-serif",
        size: 12,
        weight: 400
      }
    }
  },
};

function Chart({ minTemp, maxTemp, dayLabels }) {
  const data = {
    labels: dayLabels,
    datasets: [
      {
        label: 'Low temperature',
        data: minTemp,
        borderColor: '#719596',
        backgroundColor: '#719596',
        borderWidth: 2,
      },
      {
        label: 'High temperature',
        data: maxTemp,
        borderColor: '#ea6a69',
        backgroundColor: '#ea6a69',
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className="forecast">
      <h1 className="forecast__title">Daily Forecast</h1>
      <Line className="forecast__chart" options={options} data={data} />
    </section>
  )
}

export default Chart;
