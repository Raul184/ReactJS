import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './ColorBox.css';
//Clipboard Usability
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ColorBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false
    }
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  //ON Change Copy Clipboard Functionality
  changeCopyState(){
    this.setState({
      copied : true
    },
    () => {
      setTimeout(() => this.setState({ copied : false}), 1500);
    });
  }
  render() {
    //Props
    const {name , background} = this.props;
    //Clipboard
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{background}}>
          {/* Scale CSS Animation on CopyCLick */}
          <div className={`OverlayInCopy ${this.state.copied && "show"}`} style={{ background }}/>
          <div className={`Overlay-msg ${this.state.copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{this.props.background}</p>
          </div>
          {/* Scale CSS Animation on CopyCLick END*/}
          <div className="ColorBox-copy">
            <div className="ColorBox-content">
              <span>{name}</span>
            </div>
            <button className="ColorBox-copyBtn">Copy</button>
          </div>
          <Link to="/" onClick={e => e.stopPropagation()}> 
            <span className="ColorBox-more" >More</span>
          </Link>
        </div>
      </CopyToClipboard>
    )
  }
}
