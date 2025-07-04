import Link from "next/link";
import React from "react";

function BudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  return (
    <Link href={`/dashboard/expenses/${budget?.id}`}>
      <div
        className="p-5 border-2 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[180px] flex flex-col justify-between"
      >
        {/* Header Section */}
        <div className="flex gap-4 items-center justify-between sm:gap-4 w-full overflow-hidden">
          <div className="flex gap-3 items-center">
            <div
              className="text-2xl p-4 bg-slate-100 rounded-full flex items-center justify-center shadow-inner"
            >
              {budget?.icon}
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-800">{budget.name}</h2>
              <h2 className="text-sm text-gray-500">{budget.totalItem} Items</h2>
            </div>
          </div>
          <h2 className="font-bold text-primary text-xl">${budget.amount}</h2>
        </div>

        {/* Spending Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
            <h2>${budget.totalSpend ? budget.totalSpend : 0} Spent</h2>
            <h2>${budget.amount - budget.totalSpend} Remaining</h2>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full ${calculateProgressPerc() >= 100 ? 'bg-red-500' : 'bg-primary'} transition-all duration-500`}
              style={{ width: `${calculateProgressPerc()}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;