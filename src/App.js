import React from 'react';
import { Typography, Button } from '@material-ui/core';
import RevenueStreamBarGraph from './RevenueStreamBarGraph';
import RevenuePieCharts from './RevenuePieCharts';


function App() {

  const incomeData = [
    { label: 'Lands rates', amount: 6000 },
    { label: 'Signbaords and Promotions', amount: 1800 },
    { label: 'Others Streams', amount: 3500 },
    { label: 'Hospital fees', amount: 1100 },
    { label: 'Parking fees', amount: 4100 },
    { label: 'License fees', amount: 5200 },
    { label: 'Market Fees', amount: 2800 },
    { label: 'Building Plans', amount: 5800 },
    { label: 'Fines and penalties', amount: 2200 },
    { label: 'Business Permits', amount: 8000 },
    { label: 'Liquor Licenses', amount: 4800 },
    // Add more objects for additional streams of income
  ];


  
  return (
    <div>
      <Typography variant="h1">Revenue Streams Tracker R.S.T</Typography>

      <Button variant="contained" color="primary">Click Me!</Button>

      <Typography variant="h2">Bar Graph</Typography>
      <RevenueStreamBarGraph incomeData={incomeData} />

      <Typography variant="h2">Pie Chart</Typography>
      <RevenuePieCharts incomeData={incomeData} />
    </div>
  );
}

export default App;