import React from 'react';
import BudgetList from './_components/BudgetList';

function Budget() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-blue-100 p-10 flex flex-col items-center mt-5'>
      <h2 className='font-bold text-4xl text-blue-800 mb-6 drop-shadow-md'>My Budgets</h2>
      <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6'>
        <BudgetList />
      </div>
    </div>
  );
}

export default Budget;