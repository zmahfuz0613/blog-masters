import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'
import './PostCreate.css'
import styled, { keyframes } from "styled-components";
import { fadeInLeft, zoomIn} from "react-animations";



const fadeInAnimation = keyframes`${fadeInLeft}`;
const EntryDiv = styled.section`
  animation: 4s ${fadeInAnimation};
`;

const zoomInAnimation = keyframes`${zoomIn}`;
const TextDiv = styled.section`
  animation: 2s ${zoomInAnimation};
`;

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
    <TextDiv className="text-div">
      <h1 className="your-post_text">Create Your Post</h1>
    </TextDiv>
    <EntryDiv className="create-form_div">
        <form className="create-post_form" onSubmit={hanleSubmit}>
          <input className="create-input" onChange={handleChange} name="title" placeholder="Title" value={post.title} required></input>
          <input className="create-input" onChange={handleChange} name="author" placeholder="Author" value={post.author} required></input>
          <input className="create-input" onChange={handleChange} name="imgURL" placeholder="Insert Image" value={post.imgURL} required></input>
          <textarea className="create-textarea" onChange={handleChange} name="body"  placeholder="Your Entry" value={post.body} required></textarea>
          <button type="submit" className="create-button" >SUBMIT</button>

      </form>
      </EntryDiv>
      </div>
  )
}

export default PostCreate
