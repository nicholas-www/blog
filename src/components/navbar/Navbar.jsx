import {
  faBars,
  faBlog,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../logo/Logo";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <Logo />

        <div className={`navlinks ${navOpen ? "nav-menu" : ""}`}>
          <FontAwesomeIcon
            className="close"
            icon={faXmark}
            onClick={() => {
              setNavOpen(false);
            }}
          />

          <NavLink to={"/"} className={({isActive}) => isActive ? 'link active' : 'link'} >
            Home
          </NavLink>
          <NavLink to={"/posts"} className={({isActive}) => isActive ? 'link active' : 'link'}>
            Blog
          </NavLink>
          <NavLink to={"/contact"} className={({isActive}) => isActive ? 'link active' : 'link'}>
            Contact Us
          </NavLink>
          <Link className="btn">
            Suscribe <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </div>

        <FontAwesomeIcon
          className="open"
          icon={faBars}
          onClick={() => {
            setNavOpen(true);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
