import React from 'react';
import { Pie } from 'react-chartjs-2';

const AllocationDisplay = ({ data }) => {
  const pieData = {
    labels: ['SIPs', 'Gold', 'Crypto'],
    datasets: [
      {
        data: [data.SIP, data.Gold, data.Crypto],
        backgroundColor: ['#4CAF50', '#FFD700', '#FF5722'],
      },
    ],
  };

  return (
    <div>
      <h3>Investment Plan</h3>
      <Pie data={pieData} />
      <ul>
        <li>SIPs: ₹{data.SIP}</li>
        <li>Gold: ₹{data.Gold}</li>
        <li>Crypto: ₹{data.Crypto} (~{data.BTC} BTC)</li>
      </ul>
    </div>
  );
};

export default AllocationDisplay;
