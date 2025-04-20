import React, { useState } from 'react';

const IncomeForm = ({ onSubmit }) => {
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income > 0) onSubmit(parseFloat(income));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Monthly Income (INR)</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="e.g. 50000"
        required
      />
      <button type="submit">Calculate Plan</button>
    </form>
  );
};

export default IncomeForm;
