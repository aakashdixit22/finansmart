"use client";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses, Incomes } from "@/utils/schema";
import BarChartDashboard from "./_components/BarChartDashboard";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";

function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  const getBudgetList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Budgets),
          totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`count(${Expenses.id})`.mapWith(Number),
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetList(result);
      getAllExpenses();
      getIncomeList();
    } catch (error) {
      console.error("Error fetching budget list:", error);
    }
  };

  const getIncomeList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Incomes),
          totalAmount: sql`SUM(CAST(${Incomes.amount} AS NUMERIC))`.mapWith(Number),
        })
        .from(Incomes)
        .groupBy(Incomes.id);

      setIncomeList(result);
    } catch (error) {
      console.error("Error fetching income list:", error);
    }
  };

  const getAllExpenses = async () => {
    try {
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
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-[#f0f9ff] to-[#bae6fd] min-h-screen flex flex-col gap-8 font-sans text-gray-800">
      <header className="flex justify-between items-center mb-6">
        <div>
        <h2 className="font-bold text-5xl text-[#4a4a4a]">
  Hi, {user?.fullName}
  <span className="hidden sm:inline"> 👋</span>
</h2>
          <p className="text-gray-500 text-lg">Here’s what’s happening with your money — let’s take control!</p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </header>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 flex flex-col gap-8">
          <BarChartDashboard budgetList={budgetList} />
          <ExpenseListTable expensesList={expensesList} refreshData={getBudgetList} />
        </div>

        <aside className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
          <h2 className="font-bold text-xl mb-4 text-[#4a4a4a]">Latest Budgets</h2>
          <div className="flex flex-col gap-4">
            {budgetList?.length > 0
              ? budgetList.map((budget) => <BudgetItem budget={budget} key={budget.id} />)
              : [1, 2, 3, 4].map((item) => (
                  <div
                    key={`skeleton-${item}`}
                    className="h-[180px] w-full bg-gradient-to-r from-[#f0f9ff] to-[#bae6fd] rounded-lg animate-pulse"
                  ></div>
                ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;