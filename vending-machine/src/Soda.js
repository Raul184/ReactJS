import React, { Component } from 'react'
import './Soda.css';
import sodaImg from './Soda.png';
import {Link} from 'react-router-dom';

export default class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt='soda'/>
        <div>
          <h1>SoDaca is my favorite!!!</h1>
          <h3>But now I drink sparkling water</h3>
          <p>I still miss Soda</p>
        </div>

        <img src={sodaImg} alt='soda' />
        <Link to='/'>Go Back</Link>
      </div>
    )
  }
}
