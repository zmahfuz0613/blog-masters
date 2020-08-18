import React, { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect, Link } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

function PostEdit(props) {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgURL: '',
    body: '',
  })
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = props.match.params
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  return (
    <div className="post-edit">
      {/* <div className="image-container">
        <img
          className="edit-product-image"
          src={post.imgURL}
          alt={post.title}
        />
        <form onSubmit={handleSubmit}>
          <input
            className="edit-input-image-link"
            placeholder="Image Link"
            value={post.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </form>
      </div> */}
      <form className="edit-form" onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <input
          placeholder="Update title"
          value={post.title}
          name="title"
          id="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <label for="author">Author:</label>
        <input
          className="edit-form__author"
          placeholder="Update author"
          value={post.author}
          name="author"
          id="author"
          required
          onChange={handleChange}
        />
        <label for="imgURL">Image URL:</label>
        <input
          // className="edit-form__imgURL"
          placeholder="Update image"
          value={post.imgURL}
          name="imgURL"
          id="imgURL"
          required
          onChange={handleChange}
        />
        <label for="body">Body:</label>
        <textarea
          // className="edit-form__body"
          rows={9}
          cols={78}
          placeholder="Body"
          value={post.body}
          name="body"
          id="body"
          required
          onChange={handleChange}
        />
        <Link className="post-detail--link" to={`/edit-post/${post._id}/edit`}>
          <button>Update Post</button>
        </Link>
      </form>
    </div>
  )
}

export default PostEdit
