import { useState } from "react";
import { AddNoteBtn } from "./AddNoteBtn";
import AllNotes from "./AllNotes";
import SearchBar from "./SearchBar";

export const Notes = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };
  return (
    <div className="w-full h-full py-10 px-10 lg:px-40 overflow-auto">
      <AddNoteBtn />
      <SearchBar onChange={handleChange} />
      <AllNotes key={query} query={query} />
    </div>
  );
};
