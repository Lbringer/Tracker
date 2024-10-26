import { isSidebarOpen } from "../recoil";
import { Sidebar, SidebarBody, SidebarLink } from "../compnents/Sidebar";
import { useRecoilState } from "recoil";
import notesIcon from "../assets/notesIcon.svg";
import todosIcon from "../assets/todosIcon.svg";
import logoutIcon from "../assets/logoutIcon.svg";
import todayIcon from "../assets/todayIcon.svg";
import { useWhoami } from "../hooks";

const SidebarDisplay = () => {
  const { name } = useWhoami();
  const [open, setOpen] = useRecoilState(isSidebarOpen);

  const links = [
    {
      label: "Today",
      href: "/home/today",
      icon: <img src={todayIcon} alt="today" />,
    },
    {
      label: "Notes",
      href: "/home/notes",
      icon: <img src={notesIcon} alt="todo" />,
    },
    {
      label: "TODO's",
      href: "/home/todos",
      icon: <img src={todosIcon} alt="todo" />,
    },
    {
      label: "Logout",
      href: "/signin",
      icon: <img src={logoutIcon} alt="todo" />,
      onClick: () => {
        localStorage.removeItem("token");
      },
    },
  ];
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? (
            <div className="text-xl text-light">
              <span className="font-bold">Tra</span>cker
            </div>
          ) : (
            <div className="text-2xl text-light font-medium">T.</div>
          )}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label:
                name == "" ? (
                  <div role="status" className="animate-pulse">
                    <div className="h-2.5 bg-darkAlt rounded-full w-20"></div>
                  </div>
                ) : (
                  `${name}`
                ),
              href: "/user",
              icon: open ? (
                <></>
              ) : name == "" ? (
                <div className="animate-pulse">
                  <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-darkAlt rounded-full"></div>
                </div>
              ) : (
                <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden border border-grey rounded-full">
                  <span className="text-lightAlt">{name.charAt(0)}</span>
                </div>
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarDisplay;
