import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './DogList.css';
export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="text-center">Dog List!</h1>
          <div className="row">
            {this.props.dogs.map( d=> (
              <div key={d.name} className="Dog col-lg-4 text-center">
                <img src={d.src} alt={d.name}/>
                <h3><Link to={`/dogs/${d.name}`}>{d.name}</Link></h3>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
