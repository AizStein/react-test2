import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeHandler = ({ isActive }) =>
    isActive ? "first-class" : "second-class";
  return (
    <header>
      <nav>
        <ul className="lists">
          <li>
            <NavLink to="/" className={activeHandler}>Home </NavLink>
          </li>
          <li>
            <NavLink to="/vocal" className={activeHandler}>
              Vocal
            </NavLink>
          </li>
          <li>
            <NavLink to="/guitar" className={activeHandler}>
              Guitar
            </NavLink>
          </li>
          <li>
            <NavLink to="/violin" className={activeHandler}>
              {" "}
              Violin
            </NavLink>
          </li>
          <li>
            <NavLink to="/drums" className={activeHandler}>
              {" "}
              Drums
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
