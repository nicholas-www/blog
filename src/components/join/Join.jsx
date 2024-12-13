import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './Join.css'

const Join = () => {
  return (
    <section className="join">
      <h1>Join our team of creative authors</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, provident
        assumenda nostrum, voluptate reiciendis magni minima, dignissimos fuga
        quod neque recusandae! Facere unde optio ipsa corrupti ipsum molesti
      </p>

      <Link to={'/register'} className="btn btn-primary">Join now <FontAwesomeIcon icon={faUserPlus}/> </Link>
    </section>
  );
};

export default Join;
