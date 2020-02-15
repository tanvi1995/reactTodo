import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {  Link} from 'react-router-dom'


const Navbars = () => {
  return (
    <div className="nav-container">
    <h2>Todo Application</h2>
    <Navbar bg="light" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link className="todoLink" to="/">Todo</Link> &nbsp;
        <Link className="usersLink" to="/users">Users</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbars
