import { DateWidget } from "../components/DateWidget";
import { Expenses } from "../components/Expenses";
import { MainNav } from "../components/MainNav";
import { Notes } from "../components/Notes";
import { TodoWidget } from "../components/TodoWidget";

export const Dashboard = () => {
  return (
    <div className="px-24 h-screen w-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <MainNav />
      <div className="w-full grow px-20 py-4 flex">
        <div className="w-1/2 h-full flex flex-col mr-1">
          <DateWidget />
          <TodoWidget />
        </div>
        <div className="w-1/2 h-full flex flex-col ml-1">
          <Expenses />
          <Notes />
        </div>
      </div>
    </div>
  );
};
