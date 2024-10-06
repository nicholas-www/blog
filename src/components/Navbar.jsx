import "./Navbar.css";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <ul>
        <NavLink text="Home" href="#home" state="active" />
        <NavLink text="About" href="#home" state="in-active" />
        <NavLink text="Projects" href="#home" state="in-active" />
        <NavLink text="Contact" href="#home" state="in-active" />
      </ul>
      <div className="theme"></div>
    </nav>
  );
};

export default Navbar;
