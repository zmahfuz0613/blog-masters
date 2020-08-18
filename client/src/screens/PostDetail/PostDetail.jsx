import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PostDetail.css'
import { getPost, deletePost } from '../../services/posts'

function PostDetail(props) {
  console.log(props)
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
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
        <button

        // onClick={() => deleteProduct(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default PostDetail
