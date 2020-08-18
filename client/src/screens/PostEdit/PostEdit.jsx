import React, { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

function PostEdit() {
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  const { id } = useParams()

  console.log(setUpdated)

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
    console.log(setUpdated, updatePost)
  }, [id])

  if (isUpdated) return <Redirect to={`/`} />

  if (!isLoaded) {
    return <h1>Loading... Please wait.</h1>
  }

  return (
    <div className="edit-post">
      <h1>Edit the post titled:</h1>
      <h1>{post.title}</h1>
      <h4>with the id of:</h4>
      <p>{post._id}</p>
    </div>
  )
}

export default PostEdit
