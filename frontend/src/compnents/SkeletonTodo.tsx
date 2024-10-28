export const SkeletonTodo = () => {
  return (
    <div className="mt-10 mb-10 ">
      <div className="animate-pulse flex items-center mb-5">
        <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden border border-lightAlt rounded-full"></div>
        <div className="relative inline-flex items-center justify-center w-1/4 h-3 overflow-hidden bg-lightAlt ml-2 rounded "></div>
      </div>
      <div className="animate-pulse flex items-center mb-5">
        <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden border border-lightAlt rounded-full"></div>
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt ml-2 rounded "></div>
      </div>
      <div className="animate-pulse flex items-center mb-5">
        <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden border border-lightAlt rounded-full"></div>
        <div className="relative inline-flex items-center justify-center w-1/3 h-3 overflow-hidden bg-lightAlt ml-2 rounded "></div>
      </div>
      <div className="animate-pulse flex items-center mb-5">
        <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden border border-lightAlt rounded-full"></div>
        <div className="relative inline-flex items-center justify-center w-1/5 h-3 overflow-hidden bg-lightAlt ml-2 rounded "></div>
      </div>
    </div>
  );
};
