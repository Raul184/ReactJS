import React, { Component } from 'react'
//Typings
import PropTypes from 'prop-types';


export default class Tracks extends Component {
  state = {
    playing: false,
    audio: null
  }
  play = previewUrl => {
    const audio = new Audio(previewUrl);

    if(!this.state.playing){
      audio.play();
      this.setState({
        playing: true , 
        audio
      });
    } else {
      this.state.audio.pause();
      this.setState({
        playing: false
      });
    } 
  }
    render() {
        const {tracks} = this.props;
        return (
          <ul>
            {
              tracks.length > 0 ? tracks.map( s => {
                return <div key={s.id} onClick={() => this.play(s.preview_url)}>
                  <img src={s.album.images[0].url} alt='...'/>
                  <p>{s.name}</p>
                </div>
              }) : ''
            }
          </ul>
        )
    }
}

//TYPING 
Tracks.propTypes = {
  tracks: PropTypes.any.isRequired,
}