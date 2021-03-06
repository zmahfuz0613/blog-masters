import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { Navbar } from 'react-bootstrap'

function Nav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to="/">BLOG MASTERS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-Navbar-nav" />
        <Navbar.Collapse id="responsive-Navbar-nav">
          <Navbar className="mr-auto"></Navbar>
          <Navbar>
            <Link className="nav-link nav-link-important" to="/">
              Posts
            </Link>
            <Link className="nav-link nav-link-important" to="/create-post">
              Create Post
            </Link>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Nav
