export const SkeletonNote = () => {
  return (
    <>
      <div className="border border-lightAlt rounded p-5 text-sm mb-5 cursor-pointer">
        <div className="mb-5 text-xs text-grey">
          <div className="animate-pulse">
            <div className="relative inline-flex items-center justify-center w-10 h-2 overflow-hidden bg-lightAlt rounded "></div>
          </div>
        </div>
        <div className="animate-pulse flex flex-col">
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        </div>
      </div>
      <div className="border border-lightAlt rounded p-5 text-sm mb-5 cursor-pointer">
        <div className="mb-5 text-xs text-grey">
          <div className="animate-pulse">
            <div className="relative inline-flex items-center justify-center w-10 h-2 overflow-hidden bg-lightAlt rounded "></div>
          </div>
        </div>
        <div className="animate-pulse flex flex-col">
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
          <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        </div>
      </div>
    </>
  );
};
