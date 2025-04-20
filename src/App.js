import React, { useState } from 'react';
import IncomeForm from './components/IncomeForm';
import AllocationDisplay from './components/AllocationDisplay';
import PDFDownload from './components/PDFDownload';
import { calculateAllocation } from './utils/calculateAllocation';

const App = () => {
  const [allocation, setAllocation] = useState(null);

  const handleIncomeSubmit = async (income) => {
    const result = await calculateAllocation(income);
    setAllocation(result);
  };

  return (
    <div className="App">
      <h1>Personal Investment Planner</h1>
      {!allocation ? (
        <IncomeForm onSubmit={handleIncomeSubmit} />
      ) : (
        <>
          <AllocationDisplay data={allocation} />
          <PDFDownload data={allocation} />
        </>
      )}
    </div>
  );
};

export default App;
