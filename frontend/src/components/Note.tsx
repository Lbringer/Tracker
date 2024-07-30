import React, { useEffect, useState } from "react";
import { NotesObject } from "../types";

type NoteProps = {
  note: NotesObject;
};

export const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-5 cursor-pointer rounded-md text-xs font-normal mt-2">
      {note.text.length > 200
        ? note.text.substring(0, 200) + "....."
        : note.text}
    </div>
  );
};
