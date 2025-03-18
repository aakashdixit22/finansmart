"use client"
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import ExpenseListTable from './_components/ExpenseListTable';
import { useUser } from '@clerk/nextjs';

function ExpensesScreen() {
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && getAllExpenses();
  }, [user]);

  /**
   * Fetch all expenses belonging to the user
   */
  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Expenses.id));
    setExpensesList(result);
  };

  return (
    <div className='p-10 min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#bfdbfe] text-gray-800 flex flex-col items-center justify-start pt-20'>
      <h2 className='font-bold text-4xl mb-6 text-[#1e3a8a] drop-shadow-lg'>My Expenses</h2>
      <div className='w-full max-w-4xl bg-white/70 shadow-xl rounded-2xl p-6 border border-white/50  transition-transform duration-300 '>
        <ExpenseListTable refreshData={() => getAllExpenses()} expensesList={expensesList} />
      </div>
    </div>
  );
}

export default ExpensesScreen;
