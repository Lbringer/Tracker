import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="text-slate-950 dark:text-slate-50 bg-slate-100 dark:bg-slate-900 rounded-lg w-full h-full px-8 py-6">
      {children}
    </div>
  );
};

export default Wrapper;
