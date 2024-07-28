import { useNavigate } from "react-router-dom";
import { Btn } from "../components/Btn";
import { SimpleNav } from "../components/SimpleNav";
export const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen h-screen px-24 bg-slate-50 dark:bg-slate-950 flex flex-col items-center ">
      <SimpleNav />
      <div className="mt-40 text-4xl text-slate-950 dark:text-slate-50">
        <span className="font-medium">Track </span>{" "}
        <span className="font-light">everything</span>
      </div>
      <p className="text-slate-950 text-sm dark:text-slate-200 mt-8 w-1/3 text-center ">
        All in one tracker with Todo, Expense and notes. With the power to see
        all previous data.
      </p>
      <div className="flex mt-8 w-1/5 justify-between">
        <Btn onClick={handleRegister} title="Register" />
        <Btn onClick={handleLogin} title="Login" />
      </div>
    </div>
  );
};
