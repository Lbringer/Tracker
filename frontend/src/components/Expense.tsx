import React from "react";
import { ExpenseObject } from "../types";

type ExpenseProps = {
  expense: ExpenseObject;
  currency: string;
};

export const Expense: React.FC<ExpenseProps> = ({ expense, currency }) => {
  const css = expense.postive ? "text-green-500" : "text-red-500";
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-5 cursor-pointer rounded-md text-xs font-normal mt-2 flex items-center justify-between">
      <span>{expense.note}</span>
      <span className={`font-medium ${css}`}>
        <span className="mr-0.5">{currency}</span>
        {expense.amt}
      </span>
    </div>
  );
};
