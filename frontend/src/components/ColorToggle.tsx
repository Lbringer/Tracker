import { useEffect, useState } from "react";
import dark_theme_btn from "../assets/dark_theme.svg";
import light_theme_btn from "../assets/light_theme.svg";
import { useRecoilState } from "recoil";
import { themeState } from "../recoil";
export const ColorToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    const root = document.documentElement;
    if (localStorage.getItem("theme") == "dark") {
      root.classList.remove("dark");
      setTheme("");
    } else {
      root.classList.add("dark");
      setTheme("dark");
    }
  };
  return theme == "dark" ? (
    <div className="w-10 cursor-pointer">
      <img
        onClick={toggleTheme}
        className="w-full h-full"
        src={dark_theme_btn}
        alt="change_theme"
      />
    </div>
  ) : (
    <div className="w-10 cursor-pointer">
      <img
        onClick={toggleTheme}
        className="w-full h-full"
        src={light_theme_btn}
        alt="change_theme"
      />
    </div>
  );
};
