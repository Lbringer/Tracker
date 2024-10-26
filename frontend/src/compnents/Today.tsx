import { AddTodoNotClicked } from "./AddTodoNotClicked";
import { AddTodoClicked } from "./AddTodoClicked";
import { useRecoilValue } from "recoil";
import { isAddTodoClicked } from "../recoil";
import { TodaysTodos } from "./TodaysTodos";

export const Today = () => {
  const isClicked = useRecoilValue(isAddTodoClicked);
  return (
    <div className="w-full h-full py-10 px-10 lg:px-40 overflow-auto">
      <div className="text-2xl mb-10">Today</div>
      <div className="mb-5">Todo's</div>
      <TodaysTodos />
      <hr />
      {isClicked ? <AddTodoClicked /> : <AddTodoNotClicked />}
    </div>
  );
};
