import React, { Component } from 'react'
import {Link} from 'react-router-dom';
//Typings
import PropTypes from 'prop-types';


export default class Tracks extends Component {
    render() {
        const {tracks} = this.props;
        return (
          <ul>
            {
              tracks.map( s => {
                return <li><Link to={s.url} >{s.theme}</Link></li>
              })
            }
          </ul>
        )
    }
}

//TYPING 
Tracks.propTypes = {
  tracks: PropTypes.array.isRequired,
}