export const SkeletonNoteDisplay = () => {
  return (
    <div className="px-10 lg:px-44 py-5 w-full">
      <div className="animate-pulse mb-5">
        <div className="relative inline-flex items-center justify-center w-20 h-3 overflow-hidden bg-lightAlt rounded "></div>
      </div>
      <div className="animate-pulse flex flex-col mb-10">
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-1/3 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
      </div>
      <div className="animate-pulse flex flex-col mb-10">
        <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-3/4 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-1/2 h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
        <div className="relative inline-flex items-center justify-center w-full h-3 overflow-hidden bg-lightAlt rounded mb-3"></div>
      </div>
    </div>
  );
};
