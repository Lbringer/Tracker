import Wrapper from "./Wrapper";
import { SubTitle } from "./SubTitle";
import { useState } from "react";
import { NoData } from "./NoData";
import { ExpenseObject } from "../types";

export const Expenses = () => {
  const [expenses, setExpenses] = useState<Array<ExpenseObject>>([]);
  const [note, setNote] = useState<string>("");
  const [amt, setAmt] = useState<string>("");

  return (
    <div className="h-2/3 mb-1">
      <Wrapper>
        <SubTitle label={"Expenses"} />
        <div className="w-full h-full flex flex-col">
          {expenses.length === 0 ? (
            <NoData label={"No expenses yet ...."} />
          ) : (
            <div className="w-full grow overflow-auto w-full h-10 mb-2">
              {expenses.map((expenses) => {
                return <div>{expenses.note}</div>;
              })}
            </div>
          )}
          <div className="w-full grid grid-cols-3 gap-2 ">
            <input
              value={amt}
              onChange={(e) => {
                setAmt(e.target.value);
              }}
              type="text"
              className="text-sm placeholder:text-xs focus:outline-none placeholder:font-light px-8 py-3 mb-2 rounded-lg bg-slate-50 dark:bg-slate-950"
              placeholder="+₹500 / -₹20"
            />
            <input
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
              type="text"
              className="col-span-2 text-sm placeholder:text-xs focus:outline-none placeholder:font-light px-8 py-3 mb-2 rounded-lg bg-slate-50 dark:bg-slate-950"
              placeholder="Add a note"
            />
            <button className="col-span-3 mb-2 w-full text-xs dark:font-medium py-4 rounded-lg bg-slate-950 dark:bg-slate-50 text-slate-50 dark:text-slate-950">
              Add an expense
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
