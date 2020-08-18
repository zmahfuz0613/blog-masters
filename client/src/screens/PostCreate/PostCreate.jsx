import React, { useState } from 'react'
import './PostCreate.css'
import { createPost } from '../../services/posts'

function PostCreate() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    imgURL: '',
    author: ''

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post, 
      [name]: value
    })
    


  }



  
  return (
    <>
    <div>
      <h1>Create Your Post</h1>
    </div>
    <div>
        <form>
          <input onChange={handleChange} name="title"  placeholder="Title" value={post.title}></input>
          <textarea onChange={handleChange} name="body"  placeholder="Your Entry" value={post.body}></textarea>
          <input onChange={handleChange} name="imgURL" placeholder="Insert Image" value={post.imgURL}></input>
          <input onChange={handleChange} name="author" placeholder="Author" value={post.author}></input>
          <button type="submit" >SUBMIT</button>

      </form>
      </div>
      </>
  )
}

export default PostCreate
