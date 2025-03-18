// "use client";
// import { db } from "@/utils/dbConfig";
// import { Budgets, Expenses } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import { desc, eq, getTableColumns, sql } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import BudgetItem from "../../budgets/_components/BudgetItem";
// import AddExpense from "../_components/AddExpense";
// import ExpenseListTable from "../_components/ExpenseListTable";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Trash } from "lucide-react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import EditBudget from "../_components/EditBudget";

// function ExpensesScreen({ params }) {
//   const { user } = useUser();
//   const [budgetInfo, setbudgetInfo] = useState();
//   const [expensesList, setExpensesList] = useState([]);
//   const route = useRouter();

//   useEffect(() => {
//     user && getBudgetInfo();
//   }, [user]);

//   const getBudgetInfo = async () => {
//     const result = await db
//       .select({
//         ...getTableColumns(Budgets),
//         totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
//         totalItem: sql`count(${Expenses.id})`.mapWith(Number),
//       })
//       .from(Budgets)
//       .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
//       .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
//       .where(eq(Budgets.id, params.id))
//       .groupBy(Budgets.id);

//     setbudgetInfo(result[0]);
//     getExpensesList();
//   };

//   const getExpensesList = async () => {
//     const result = await db
//       .select()
//       .from(Expenses)
//       .where(eq(Expenses.budgetId, params.id))
//       .orderBy(desc(Expenses.id));
//     setExpensesList(result);
//   };

//   const deleteBudget = async () => {
//     await db.delete(Expenses).where(eq(Expenses.budgetId, params.id));
//     await db.delete(Budgets).where(eq(Budgets.id, params.id));
//     toast("Budget Deleted!");
//     route.replace("/dashboard/budgets");
//   };

//   return (
//     <div className="p-10 bg-[#E3F7FF] min-h-screen rounded-lg shadow-xl border border-[#B3E5FC]">
//       <h2 className="text-4xl font-bold flex justify-between items-center text-gray-800">
//         <span className="flex gap-2 items-center">
//           <ArrowLeft onClick={() => route.back()} className="cursor-pointer text-blue-500 hover:text-blue-700" />
//           My Expenses
//         </span>
//         <div className="flex gap-3 items-center">
//           <EditBudget budgetInfo={budgetInfo} refreshData={getBudgetInfo} />
//           <AlertDialog>
//             <AlertDialogTrigger asChild>
//               <Button className="flex gap-2 rounded-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-medium shadow-md">
//                 <Trash className="w-4" /> Delete
//               </Button>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   This action cannot be undone. This will permanently delete your current budget along with expenses and remove your data from our servers.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogCancel>Cancel</AlertDialogCancel>
//                 <AlertDialogAction onClick={deleteBudget}>Continue</AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>
//         </div>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
//         {budgetInfo ? (
//           <BudgetItem budget={budgetInfo} />
//         ) : (
//           <div className="h-[150px] w-full bg-gray-200 rounded-lg animate-pulse"></div>
//         )}
//         <AddExpense budgetId={params.id} user={user} refreshData={getBudgetInfo} />
//       </div>
//       <div className="mt-6">
//         <ExpenseListTable expensesList={expensesList} refreshData={getBudgetInfo} />
//       </div>
//     </div>
//   );
// }

// export default ExpensesScreen;

"use client";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
import ExpenseListTable from "../_components/ExpenseListTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import EditBudget from "../_components/EditBudget";

function ExpensesScreen({ params }) {
  const { user } = useUser();
  const [budgetInfo, setbudgetInfo] = useState();
  const [expensesList, setExpensesList] = useState([]);
  const route = useRouter();

  useEffect(() => {
    user && getBudgetInfo();
  }, [user]);

  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Budgets.id, params.id))
      .groupBy(Budgets.id);

    setbudgetInfo(result[0]);
    getExpensesList();
  };

  const getExpensesList = async () => {
    const result = await db
      .select()
      .from(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .orderBy(desc(Expenses.id));
    setExpensesList(result);
  };

  const deleteBudget = async () => {
    await db.delete(Expenses).where(eq(Expenses.budgetId, params.id));
    await db.delete(Budgets).where(eq(Budgets.id, params.id));
    toast("Budget Deleted!");
    route.replace("/dashboard/budgets");
  };

  return (
    <div className="p-8 bg-[#ECF8FF] min-h-screen rounded-2xl shadow-lg border border-[#B3E5FC] transition-all duration-300 hover:shadow-blue-300 flex flex-col gap-6">
      <h2 className="text-4xl font-bold flex justify-between items-center text-gray-800 drop-shadow-md">
        <span className="flex gap-2 items-center">
          <ArrowLeft onClick={() => route.back()} className="cursor-pointer text-blue-500 hover:text-blue-700 transition-transform transform hover:-translate-x-1" />
          My Expenses
        </span>
        <div className="flex gap-3 items-center">
          <EditBudget budgetInfo={budgetInfo} refreshData={getBudgetInfo} />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="flex gap-2 rounded-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-medium shadow-md transform hover:scale-105">
                <Trash className="w-4" /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your current budget along with expenses and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={deleteBudget}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div className="h-[150px] w-full bg-gray-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense budgetId={params.id} user={user} refreshData={getBudgetInfo} />
      </div>
      <div className="mt-4">
        <ExpenseListTable expensesList={expensesList} refreshData={getBudgetInfo} />
      </div>
    </div>
  );
}

export default ExpensesScreen;