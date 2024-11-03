import React from "react";
import searchIcon from "../assets/searchIcon.svg";
type SearchBarProps = {
  onChange: (e: any) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  const debouncedOnChange = (e: any) => {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      onChange(e);
    }, 400);
  };
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-3/4 lg:w-1/2">
        <img
          src={searchIcon}
          alt="searchIcon"
          className="relative left-4 bottom-2"
        />
        <input
          className="border-b border-b-darkAlt bg-light focus:outline-none px-4 pl-8 py-2 mb-4 placeholder:text-xs text-sm w-full"
          onChange={debouncedOnChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
