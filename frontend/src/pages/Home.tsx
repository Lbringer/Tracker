import { Route, Routes } from "react-router-dom";
import SidebarDisplay from "../compnents/SidebarDisplay";
import { Today } from "../compnents/Today";
import { cn } from "../utils";
import { Notes } from "../compnents/Notes";
import { Todos } from "../compnents/Todos";
import { NoteDisplay } from "../compnents/NoteDisplay";
import { AddNoteBtn } from "../compnents/AddNoteBtn";
export const Home = () => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full flex-1 mx-auto overflow-hidden",
        "h-screen"
      )}
    >
      <SidebarDisplay />
      <AddNoteBtn />
      <Routes>
        <Route path="/today" element={<Today />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/note/:id" element={<NoteDisplay />} />
      </Routes>
    </div>
  );
};
