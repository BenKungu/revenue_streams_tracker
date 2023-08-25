import React from 'react';
import { Bar } from 'react-chartjs-2';

const RevenueStreamBarGraph = ({ incomeData }) => {
  const labels = incomeData.map((data) => data.label);
  const amounts = incomeData.map((data) => data.amount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192)',
        data: amounts,
      },
    ],
  };

  return <Bar data={data} />;
};


export default RevenueStreamBarGraph;