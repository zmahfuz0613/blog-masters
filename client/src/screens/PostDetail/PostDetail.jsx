import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import './PostDetail.css'
import { getPost, deletePost } from '../../services/posts'

function PostDetail(props) {
  console.log(props)
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [isDeleted, setDeleted] = useState(false)
  const iconURL =
    'https://www.shareicon.net/data/256x256/2016/08/18/814062_user_512x512.png'
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  const handleDeletePost = async (e) => {
    e.preventDefault()
    const deleted = await deletePost(post._id)
    setDeleted({ deleted })
  }

  if (isDeleted) return <Redirect to={`/`} />

  if (!isLoaded) {
    return <h1>Loading... Please wait.</h1>
  }

  return (
    <div className="post-detail">
      <h1 className="post-detail__title">{post.title}</h1>
      <div className="post-detail__author">
        <img src={iconURL} alt="MJ" />
        <h2>{post.author}</h2>
      </div>
      <img className="post-detail__image" src={post.imgURL} alt={post.title} />
      <p className="post-detail__body">{post.body}</p>
      <div className="post-detail__buttons">
        <button>
          {/* <Link className="edit-link" to={`/products/${product._id}/edit`}> */}
          Edit
          {/* </Link> */}
        </button>
        <button onClick={handleDeletePost}>Delete</button>
      </div>
    </div>
  )
}

export default PostDetail
