import React from "react";

type NoDataProps = {
  title: string;
};

export const NoData: React.FC<NoDataProps> = ({ title }) => {
  return (
    <div className="flex justify-center text-xs text-darkAlt">{title}</div>
  );
};
