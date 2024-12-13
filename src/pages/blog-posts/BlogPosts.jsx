import React from "react";
import { useState, useEffect } from "react";
import './BlogPosts.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const BlogPosts = () => {
  const [featured, setFeatured] = useState({});
  const [otherPosts, setOtherPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatured({
          ...data.posts[1],
          author: data.authors[data.posts[1].authorId].name,
        });
      });
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setOtherPosts(data.posts.slice(2));
        setAuthors(data.authors);
      });
  }, []);

  function formatDate(str) {
    if (!str) {
      return;
    }

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
      <section className="header featured">
        <div className="details">
            <h1>{featured.title}</h1>
            <div className="info">
              <p>
                By <span className="author"> {featured.author} </span>
              </p>
              <p className="date">{formatDate(featured.date)}</p>
            </div>
            <p className="caption">{featured.caption}</p>

            <Link to={"/posts/1"} className="btn btn-primary">
              Read more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>

        <div className="image">
            <img src={featured.coverImage} alt="" />
        </div>
      </section>

      <div className="all-posts">
        {
            otherPosts.map((post) => 
            <Link to={`/posts/${post.id}`}>
                <div className="image">
                    <img src={post.coverImage} alt="" />
                </div>

                <div className="details">
                    <h1>{post.title}</h1>
                    <p>{post.caption}</p>
                </div>
            </Link>
            )
        }
      </div>
    </>
  );
};

export default BlogPosts;
