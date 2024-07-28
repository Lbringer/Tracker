import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      className="font-oxygen text-3xl font-light text-slate-950 dark:text-slate-50 cursor-pointer"
    >
      T.
    </div>
  );
};
