type ErrorProps = {
  errMsg: string;
};
export const Error: React.FC<ErrorProps> = ({ errMsg }) => {
  return <div className="text-sm font-semibold text-red-500">{errMsg}</div>;
};
