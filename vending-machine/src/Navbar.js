import React, { Component } from 'react'
import './Navbar.css';
import {NavLink} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <NavLink exact to="/chips" activeClassName="Navbar-active">Chips</NavLink>
        <NavLink exact to="/soda" activeClassName="Navbar-active">Soda</NavLink>
        <NavLink exact to="/sardines" activeClassName="Navbar-active">Sardines</NavLink> 
      </nav>
    )
  }
}
