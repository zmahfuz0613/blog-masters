import React, { useState, useEffect } from 'react'
import './Home.css'
import Post from '../../components/Post/Post'
import { getPosts } from '../../services/posts'

function Home() {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    console.log('hi')
  })

  const renderPosts = allPosts.map((post, index) => {
    return (
      <Post
        key={post._id}
        _id={post._id}
        title={post.title}
        author={post.author}
        imgURL={post.imgURL}
        body={post.body}
      />
    )
  })

  return <div className="home">{renderPosts}</div>
}

export default Home
