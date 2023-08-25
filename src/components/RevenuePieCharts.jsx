import React from 'react';
import { Pie } from 'react-chartjs-2';

const RevenuePieCharts = ({ incomeData }) => {
  const labels = incomeData.map((data) => data.label);
  const amounts = incomeData.map((data) => data.amount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          // Add more colors if needed for additional streams of income
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          // Add more colors if needed for additional streams of income
        ],
        data: amounts,
      },
    ],
  };

  return <Pie data={data} />;
};

export default RevenuePieCharts;