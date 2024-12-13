import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./BlogPost.css";

const BlogPost = () => {
  const [posts, setPosts] = useState(null);
  const [authors, setAuthors] = useState(null);

  const { id } = useParams();
  console.log(id);

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

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);

  return (
    <>
      {posts && (
        <div className="blog-post">
          <header>
            <div className="post-header">
              <h1>{posts[id - 1].title}</h1>
            </div>

            <div className="author-profile">
              {authors && <img src={authors[posts[id - 1].authorId].avatar} alt="" />}
              <div className="name">
                {authors && <h2>{authors[posts[id - 1].authorId].name}</h2>}
                <p>Posted on {formatDate(posts[id - 1].date)}</p>
              </div>
            </div>
          </header>

          <div className="post-content">
            <p>
              {posts[id - 1].content} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nostrum cum molestias a aliquid eveniet tenetur soluta,
              possimus expedita quidem asperiores consectetur qui eligendi sint
              officia laudantium blanditiis vel. Totam, quis! Ad iste maxime
              eaque dolores libero dolorem minima, autem totam explicabo quis
              illum itaque dolore corrupti eius, quibusdam cupiditate harum
              soluta assumenda ipsa voluptatibus tempora exercitationem! Qui
              culpa ipsam consequatur? Fugiat magni deleniti soluta facilis
              fugit, illo accusantium optio necessitatibus sequi nisi. Ratione
              et velit necessitatibus, ut, pariatur voluptatem nostrum assumenda
              dolorem sint nulla ipsam expedita quod deleniti autem consequatur!
              Fugit officia cum, eligendi quis nostrum impedit optio iste facere
              numquam, error dolore provident alias quod, amet voluptatem quos
              aliquid veniam. Eveniet at sapiente laboriosam magnam, quasi
              aliquam? Eos, eligendi. Tenetur inventore accusamus nesciunt
              minima tempora laborum quibusdam libero rerum non enim, corrupti,
              eligendi praesentium provident voluptatem ab ullam nemo eius fuga
              incidunt eum obcaecati rem aperiam. Quod, facilis nihil. Esse
              beatae ea vero odit non ab eveniet praesentium quas sunt corrupti
              id quis facere, voluptates, culpa nihil. Quia, quaerat harum eius
              corrupti perspiciatis quos eum fugiat saepe numquam quidem. Iste
              ad accusantium, nisi porro consectetur amet possimus illum magni
              libero dicta qui quidem voluptatibus officia animi optio provident
              unde ex molestias dolores assumenda. Cum aliquid non ipsam
              asperiores similique? Ipsam cumque cupiditate labore excepturi
              assumenda adipisci illo repellendus nam quam consectetur debitis
              aliquid quis, sequi minima provident! Maiores provident ducimus
              nemo veniam quam repudiandae rerum commodi, maxime aperiam eaque!
              Aliquid fugiat hic obcaecati, ut in tempore, est necessitatibus
              eius qui, quibusdam nemo architecto perspiciatis vel delectus
              temporibus cum voluptatem reprehenderit sequi. Recusandae
              veritatis quae nihil est repudiandae possimus aliquid. Recusandae
              assumenda molestiae corporis rerum voluptate obcaecati non sint?
              Nesciunt eum odio cumque saepe, iusto fugit delectus suscipit aut?
              Nisi molestiae minus iste, illum ab doloribus architecto corrupti
              beatae optio?
            </p>
          </div>

            <h2>Recommended</h2>
          <div className="recommendation">
               { posts.slice(0,3).map((post) => {
                    if (post.id !== id) {
                        return (
                    <Link to={`/posts/${post.id}`}>
                        <img src={post.coverImage} alt="" />
                        <h1>{post.title}</h1>
                    </Link>
                        )
                    }
                }
               ) }
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;
