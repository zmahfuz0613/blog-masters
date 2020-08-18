import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({ _id, title, imgURL, body, author }) => {
  return (
    <React.Fragment>
      <Link className="post" to={`/${_id}`}>
        <div className="post__title">{title}</div>
        <div className="post__author">Written by: {author}</div>
        <img className="post__image" src={imgURL} alt={title} />
        <div className="post__body">{body}</div>
      </Link>
    </React.Fragment>
  )
}

export default Post
