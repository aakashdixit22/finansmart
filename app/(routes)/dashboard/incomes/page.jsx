import React from "react";
import IncomeList from "./_components/IncomeList";

function Income() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-start justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full mt-10 border border-gray-200">
        <h2 className="font-bold text-4xl text-blue-700 mb-6 text-center tracking-wide">My Income Streams</h2>
        <div className="border-b-2 border-blue-300 mb-4"></div>
        <IncomeList />
      </div>
    </div>
  );
}

export default Income;