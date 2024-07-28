import React from "react";

type HeadingProps = {
  heading: string;
};
export const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <div className="text-3xl font-medium text-slate-950 dark:text-slate-50 mb-4 ">
      {heading}
    </div>
  );
};
