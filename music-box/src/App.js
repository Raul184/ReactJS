import React, { Component } from 'react';
import './App.css';
//icon
import { FaSearch } from 'react-icons/fa';
import Artist from './Artist';


export default class App extends Component {
  state = {
    search: '' ,
    artist: null ,
    tracks: []
  }
  //Save Query input into State
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  // On ENTER call API
  handleEnter = (e) => {
    if(e.key === 'Enter'){

      //Save artist input as well
      this.getArtist(); 
    }
  }
  // Get Req to API
  getArtist = async () => {
    if(this.state.search.length > 0){
      try {
        const req = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.state.search}`);
        const res = await req.json();
        console.log(res);
        //Save Artist
        const artist = res.artists.items[0];
        this.setState({
          artist
        })
        //Get best Artist tracks
        const reqII = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artist.id}/top-tracks`);
        const resII = await reqII.json();
        this.setState({
          tracks : resII.tracks
        });
      }  
      catch (error) {
        console.log(error.message);
      }
    }
  }

  render() {
    return (
      <>
        <h2>Music Box</h2>
        <input 
          type='text' 
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
          placeholder='Seach artists' 
        />
        <button onClick={this.getArtist}><FaSearch/></button>  
        <Artist artist={this.state.artist} />   
      </>
    )
  }
}
