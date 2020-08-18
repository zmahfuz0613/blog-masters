import React, { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

function PostEdit(props) {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgURL: '',
    body: '',
  })
  const [isLoaded, setLoaded] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
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
    setUpdated({ updated })
  }

  if (isUpdated) {
    return <Redirect to={`/${props.match.params.id}`} />
  }

  if (!isLoaded) {
    return <h1>Loading... Please wait.</h1>
  }

  return (
    <div className="post-edit">
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
          placeholder="Update author"
          value={post.author}
          name="author"
          id="author"
          required
          onChange={handleChange}
        />
        <label for="imgURL">Image URL:</label>
        <input
          placeholder="Update image"
          value={post.imgURL}
          name="imgURL"
          id="imgURL"
          required
          onChange={handleChange}
        />
        <label for="body">Body:</label>
        <textarea
          rows={9}
          cols={78}
          placeholder="Body"
          value={post.body}
          name="body"
          id="body"
          required
          onChange={handleChange}
        />
        <div className="post-detail--link">
          <button>Update Post</button>
        </div>
      </form>
    </div>
  )
}

export default PostEdit
