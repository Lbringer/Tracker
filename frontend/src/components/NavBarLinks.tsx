import React from "react";
import { NavLink } from "react-router-dom";

type NavBarLinks = {
  to: string;
  label: string;
};

export const NavBarLinks: React.FC<NavBarLinks> = ({ to, label }) => {
  return (
    <NavLink className="mr-8 text-sm dark:font-light" to={`/${to}`}>
      {label}
    </NavLink>
  );
};
