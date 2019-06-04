import React, { Component } from 'react'
import './Joke.css';
export default class Joke extends Component {
  getColor() {
    return this.props.votes >= 15 ? "#4CAF50" : 
           this.props.votes >= 12 ? "#8BC34A" :
           this.props.votes >= 9 ? "#CDDC39" :
           this.props.votes >= 6 ? "#FFEB3B" :
           this.props.votes >= 3 ? "#FFC107" :
           this.props.votes >= 0 ? "#FF9800" : "#f44336";
  }
  getEmoji() {
    return this.props.votes >= 15 ? "em em-rolling_on_the_floor_laughing" :
           this.props.votes >= 12 ? "em em-laughing" :
           this.props.votes >= 9 ? "em em-smiley" :
           this.props.votes >= 6 ? "em em-slightly_smiling_face" :
           this.props.votes >= 3 ? "em em-neutral_face" :
           this.props.votes >= 0 ? "em em-confused" : "em em-angry";
  }
  render() {
    return (
      <div className="Joke">
        <div className="Joke-btns">
          <i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
          <span className="Joke-votes" style={{borderColor: this.getColor()}}>{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.props.updown}></i>
        </div>
        <div className="Joke-text">{this.props.topic}</div>
        <div className="Joke-smiley">
          <i className={this.getEmoji()}/>
        </div>
      </div>
    )
  }
}
