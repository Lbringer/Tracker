import { useState } from "react";
import { SubTitle } from "./SubTitle";
import Wrapper from "./Wrapper";
import { NotesObject } from "../types";
import { NoData } from "./NoData";
import { Note } from "./Note";

export const NotesWidget = () => {
  const [notes, setNotes] = useState<Array<NotesObject>>([
    {
      id: "1",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'",
    },
    {
      id: "2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ]);
  return (
    <div className="mt-1 grow">
      <Wrapper>
        <SubTitle label={"Notes"} />
        <div className="w-full h-full flex flex-col">
          {notes.length === 0 ? (
            <NoData label={"No notes yet ...."} />
          ) : (
            <div className="w-full grow overflow-auto w-full h-10 mb-2">
              {notes.map((note) => {
                return <Note note={note} />;
              })}
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};
