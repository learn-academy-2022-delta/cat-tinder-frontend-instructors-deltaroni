import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catLogo from '../assets/cat-logo.png'

class Header extends Component {
  render() {
    return(
      <header>
        <Nav className="header-nav">
          <NavItem>
            <NavLink to="/">
              <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo" />
            </NavLink>
          </NavItem>
            <NavItem>
              <NavLink to="/catindex" className="nav-link">Meet the Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catnew" className="nav-link">Add a New Cat</NavLink>
            </NavItem>
            <NavItem>
              <a target="blank" href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" className="nav-link">
                Adopt a Cat!
              </a>
            </NavItem>
        </Nav>
      </header>
    )
  }
}
export default Header
