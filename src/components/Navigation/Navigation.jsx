import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

export default function NavHeader() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav className={s.heder}>
      <div className={s.homeContact}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contact
        </NavLink>
      </div>
      <div className={s.homeContact}>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}
