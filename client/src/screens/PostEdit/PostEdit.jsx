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
        <input
          className="input-name"
          placeholder="Name"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="author"
          value={post.author}
          name="author"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          cols={78}
          placeholder="Description"
          value={post.body}
          name="body"
          required
          onChange={handleChange}
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  )
}

export default PostEdit
