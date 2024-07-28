import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { InputForm } from "../components/InputForm";
import { SimpleNav } from "../components/SimpleNav";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen px-24 bg-slate-50 dark:bg-slate-950 flex flex-col items-center ">
      <SimpleNav />
      <form action="#" className="mt-16 w-1/3 h-3/5 flex flex-col items-center">
        <Heading heading=" Hi, Welcome" />
        <InputForm label="Name" placeholder="John Doe" />
        <InputForm label="Email" placeholder="abc@gmail.com" />
        <InputForm label="Password" placeholder="JohnDoe123!" />
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="w-full text-sm dark:font-medium py-3 rounded bg-slate-950 dark:bg-slate-50 text-slate-50 dark:text-slate-950"
        >
          Submit
        </button>
        <div className="w-full flex justify-center text-slate-950 dark:text-slate-50 mt-2 text-xs font-medium ">
          <p>Already have an account?</p>
          <span
            className="underline font-semibold dark:font-medium ml-1 cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};
