import React, { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Redirect, Link } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

function PostEdit() {
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [isUpdated, setUpdated] = useState(false)
  const { id } = useParams()
  const iconURL =
    'https://www.shareicon.net/data/256x256/2016/08/18/814062_user_512x512.png'

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
    <div className="post-edit">
      <h1 className="post-edit__title">{post.title}</h1>
      <div className="post-edit__author">
        <img src={iconURL} alt="MJ" />
        <h2>{post.author}</h2>
      </div>
      <img className="post-edit__image" src={post.imgURL} alt={post.title} />
      <p className="post-edit__body">{post.body}</p>
      <div className="post-edit__buttons">
        <Link className="post-edit__button" to={`/edit-post/${post._id}/edit`}>
          <button onClick={() => alert('EDITED!')}>Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default PostEdit
