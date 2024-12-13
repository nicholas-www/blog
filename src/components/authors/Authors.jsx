import React from "react";
import { useState, useEffect } from "react";
import "./Authors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);

  return (
    <section className="authors">
        <h1>Our Authors</h1>
        <div className="author-list">
            {authors.map((author) => 
            (
                <div className="author">
                    <img src={author.avatar} alt="" />
                    <h2>{author.name}</h2>
                    <p>{author.bio}</p>
                    <div className="socials">
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faDribbble}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                </div>
            )
            )}
        </div>
    </section>
  );
};

export default Authors;
