import React from "react";

type TitleFormProps = {
  title: string;
};

export const TitleForm: React.FC<TitleFormProps> = ({ title }) => {
  return <div className="text-2xl mb-6 font-medium ">{title}</div>;
};
