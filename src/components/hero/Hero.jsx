import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setHero({ ...data.posts[0], author: data.authors[data.posts[0].authorId].name });
      });

  }, []);

  function formatDate(str) {
    console.log(str);
    const [year, month, day] = str.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = `${months[month - 1]} ${day}, ${year}`;
    return date;
  }

  return (
    <>
      {hero && (
        <header className="hero"
          style={{
            backgroundImage: `url(${hero.coverImage})`,
            backgroundColor: "rgba(0, 0, 0, 0.526) ",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container hero">
            <h1>{hero.title}</h1>
            <div className="info">
              <p>
                By <span className="author"> {hero.author} </span>
              </p>
              <p className="date">{formatDate(hero.date)}</p>
            </div>
            <p className="caption">{hero.caption}</p>
            <Link to={`/posts/${hero.id}`} className="btn btn-primary">
              Read more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Hero;
