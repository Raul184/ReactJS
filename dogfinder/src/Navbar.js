import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const dogs = this.props.dogs.map( dog => (
      <NavLink key={dog.name} to={`/dogs/${dog.name}`} activeClassName="Navbar-active">{dog.name}</NavLink>
    ))
    return (
      <div className="Navbar">
        {dogs}
      </div>
    )
  }
}
