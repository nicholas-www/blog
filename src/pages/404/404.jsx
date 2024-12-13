import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import "./404.css";

const NotFound = () => {
  return (
    <div className="container not-found">
      <div className="">
        <h1>Oops!</h1>
        <h2>Looks like the requested page does not exist. </h2>
        <Link to={"/"} className="btn btn-primary">
          Go to Home <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
