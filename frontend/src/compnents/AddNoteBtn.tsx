import addNoteFilled from "../assets/AddNoteFilled.svg";

export const AddNoteBtn = () => {
  return (
    <div className="fixed right-6 lg:right-36 bottom-10 cursor-pointer">
      <img
        src={addNoteFilled}
        alt="AddIcon"
        className="transition-all duration-300"
      />
    </div>
  );
};
