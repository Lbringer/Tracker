import lightLogout from "../assets/light_theme_logout.svg";
import darkLogout from "../assets/dark_theme_logout.svg";
import { ColorToggle } from "./ColorToggle";
import { Logo } from "./Logo";
import { useRecoilValue } from "recoil";
import { themeState } from "../recoil";
import { NavBarLinks } from "./NavBarLinks";

export const MainNav = () => {
  const theme = useRecoilValue(themeState);
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else if (hour < 22) {
      return "Good evening";
    } else {
      return "Good night";
    }
  };
  const greeting = getCurrentGreeting();

  return (
    <div
      className="text-slate-950 dark:text-slate-50 bg-slate-100 dark:bg-slate-900 rounded-b-lg w-full px-8 py-6 flex items-center
    justify-between"
    >
      <div className="flex items-center h-full">
        <Logo />
        <span className="ml-8 text-2xl mt-2">{greeting}</span>
      </div>

      <div className="flex items-center h-full">
        <NavBarLinks to="dashboard" label="Dashboard" />
        <NavBarLinks to="todo" label="Todo" />
        <NavBarLinks to="notes" label="Notes" />
        <NavBarLinks to="expenses" label="Expenses" />
        <ColorToggle />
        {theme === "dark" ? (
          <div className="w-10 cursor-pointer ml-8">
            <img src={darkLogout} alt="logout" />
          </div>
        ) : (
          <div className="w-10 cursor-pointer ml-8">
            <img src={lightLogout} alt="logout" />
          </div>
        )}
      </div>
    </div>
  );
};
