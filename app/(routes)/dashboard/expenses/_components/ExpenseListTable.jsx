import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast("Expense Deleted!");
      refreshData();
    }
  };

  return (
    <div className="mt-3 ">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="hidden md:grid grid-cols-4 rounded-tl-xl rounded-tr-xl  bg-slate-200 p-2 mt-3">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {expensesList.map((expenses, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-slate-50 rounded-xl p-2 mt-1 text-sm md:text-base"
        >
          <div className="md:hidden font-bold text-gray-500">Name:</div>
          <h2 className="font-semibold md:font-normal">{expenses.name}</h2>

          <div className="md:hidden font-bold text-gray-500">Amount:</div>
          <h2 className="text-green-500">${expenses.amount}</h2>

          <div className="md:hidden font-bold text-gray-500">Date:</div>
          <h2 className="text-gray-500">{expenses.createdAt}</h2>

          <div className="md:hidden font-bold text-gray-500">Action:</div>
          <h2
            onClick={() => deleteExpense(expenses)}
            className="text-red-500 cursor-pointer hover:underline"
          >
            Delete
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
