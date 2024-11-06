import "./Header.css";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Routemate Logo"></img>
        <span>Route Mate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        <NavLink to="/contact" className="link">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
