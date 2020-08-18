import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'
import './PostCreate.css'

function PostCreate() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    imgURL: '',
    author: ''

  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post, 
      [name]: value
    })

    
    


  }

  const hanleSubmit = async (e) => {
    e.preventDefault()
    const created = await createPost(post)
    setCreated({created})

  }

  if (isCreated) return <Redirect to={`/`} />
   



  
  return (
    <div className="create-main">
    <div className="text-div">
      <h1 className="your-post_text">Create Your Post</h1>
    </div>
    <div className="create-form_div">
        <form className="create-post_form" onSubmit={hanleSubmit}>
          <input className="create-input" onChange={handleChange} name="title" placeholder="Title" value={post.title} required></input>
          <input className="create-input" onChange={handleChange} name="author" placeholder="Author" value={post.author} required></input>
          <input className="create-input" onChange={handleChange} name="imgURL" placeholder="Insert Image" value={post.imgURL} required></input>
          <textarea className="create-textarea" onChange={handleChange} name="body"  placeholder="Your Entry" value={post.body} required></textarea>
          <button type="submit" >SUBMIT</button>

      </form>
      </div>
      </div>
  )
}

export default PostCreate
