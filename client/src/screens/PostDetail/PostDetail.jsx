import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PostDetail.css'
import { getPost, deletePost } from '../../services/posts'

function PostDetail(props) {
  console.log(props)
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading... Please wait.</h1>
  }

  return (
    <div className="post-detail">
      <h1 className="post-detail__title">{post.title}</h1>
      <h2 className="post-detail__author">{post.author}</h2>
      <img className="post-detail__image" src={post.imgURL} alt={post.title} />
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
