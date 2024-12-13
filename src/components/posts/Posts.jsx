import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
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
        setOtherPosts(data.posts.slice(2, 7));
        setAuthors(data.authors);
      });
  }, []);


  function formatDate(str) {
    if (!str) {
      return
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
      {featured && (
        <section className="featured-posts">
          <div className="featured">
            <h2>Featured</h2>

            <img src={featured.coverImage} alt="" />
            <div className="info">
              <p>
                By <span className="author"> {featured.author} </span>
              </p>
              <p className="date">{formatDate(featured.date)}</p>
            </div>
            <h1>{featured.title}</h1>
            <p className="caption">{featured.caption}</p>

            <Link to={`/posts/${featured.id}`} className="btn btn-primary">
              Read more <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="others">
            <Link to={"/posts"} className="view-all-posts">
              View All Posts
            </Link>
            <div className="list">
              {otherPosts.map((post) => (
                <Link to={`/posts/${post.id}`}>
                  <div className="info">
                    <p>
                      By{" "}
                      <span className="author">
                        {authors[post.authorId].name}
                      </span>
                    </p>
                    <p className="date">{formatDate(post.date)}</p>
                  </div>
                  <h1>{post.title}</h1>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Posts;
