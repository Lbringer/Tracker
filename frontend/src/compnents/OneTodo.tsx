import { todaysTodos, Todo } from "../recoil";
import todoDoneIcon from "../assets/todoDoneIcon.svg";
import todoNotDoneIcon from "../assets/todoNotDoneIcon.svg";
import { useRecoilState } from "recoil";
import axios from "axios";
import { BROSWER_URL } from "../config";

export const OneTodo: React.FC<Todo> = ({ title, id, done }) => {
  const [todos, setTodos] = useRecoilState(todaysTodos);
  const handleClick = async () => {
    const newTodos = JSON.parse(JSON.stringify(todos));
    newTodos.map((todo: Todo) => {
      if (todo.id == id) {
        todo.done = !todo.done;
      }
    });
    setTodos(newTodos);
    console.log(newTodos);
    await axios.put(
      `${BROSWER_URL}/api/v1/todo`,
      { id, done: done ? "0" : "1" },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  };
  return (
    <div
      className="mb-5 text-sm flex items-center cursor-pointer"
      onClick={handleClick}
    >
      {done ? (
        <img src={todoDoneIcon} alt="todoDone" />
      ) : (
        <img src={todoNotDoneIcon} alt="todoNotDone" />
      )}
      <div className={`${done ? "line-through text-darkAlt" : ""} ml-2`}>
        {title}
      </div>
    </div>
  );
};
