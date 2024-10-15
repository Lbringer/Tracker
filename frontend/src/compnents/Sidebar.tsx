import menuIcon from "../assets/menu.svg";
import { isSidebarOpen } from "../recoil";
import { useRecoilState } from "recoil";

type SidebarProps = {
  name: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useRecoilState(isSidebarOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`font-sans transform h-screen w-60 ${
        isOpen ? "translate-x-0 bg-light2" : "-translate-x-3/4 bg-light"
      } transition-all duration-300 ease-in-out p-4 fixed lg:static flex justify-between flex-col`}
    >
      <div className="flex justify-between items-center">
        <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-dark rounded-full">
          <span className="text-light">{name.charAt(0)}</span>
        </div>
        <div>
          <img
            src={menuIcon}
            alt="menu"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      {isOpen ? (
        <button className="bg-dark text-light rounded text-sm px-4 py-2">
          Logout
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
