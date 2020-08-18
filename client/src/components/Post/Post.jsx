import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ _id, title, imgURL, body, author }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Link className="post" to={`/${_id}`}>
          <div className="post__title">{title}</div>
          <img className="post__image" src={imgURL} alt={title} />

          <div className="post__author">Written by: {author}</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Post;
