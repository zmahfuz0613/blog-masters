import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">
        <h1>BLOG MASTER 3000</h1>
      </NavLink>
      <nav>
        <NavLink to="/">
          <h2>Posts</h2>
        </NavLink>
        <NavLink to="/create-post">
          <h2>Create Post</h2>
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
