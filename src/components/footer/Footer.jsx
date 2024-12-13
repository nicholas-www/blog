import React from "react";
import Logo from "../logo/Logo";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Logo />

        <div className="form">
          <h2>Suscribe to our newsletter to get fresh posts on the go!</h2>
          <div className="input">
            <input type="email" placeholder="example@email.com"/>
            <button className="btn btn-primary">
              Suscribe 
              <FontAwesomeIcon icon={faUserPlus}/>
            </button>
          </div>
        </div>

        <div className="info">
          <h3> Copyright Explora Inc. </h3>
          <div className="socials">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faXTwitter}/>
            <FontAwesomeIcon icon={faYoutube}/>
            <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
