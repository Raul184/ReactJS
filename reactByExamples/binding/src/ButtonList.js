import React, { Component } from 'react'
import './ButtonList.css';

export default class ButtonList extends Component {
  constructor(props){
    super(props);
    this.state = { color: 'lightblue'}
    this.handleClick = this.handleClick.bind(this);
  }
  //btn colors
  static defaultProps = {
    colors: [ 'purple', 'red', 'yellow', 'orange']
  };

  //On Click
  handleClick(niuColor){
    this.setState({color : niuColor })
  }
  render() {
    return (
      <div className="ButtonList" style={{backgroundColor: this.state.color}}>
        {this.props.colors.map( c => {
          const colorObj = { backgroundColor: c , border: "none"}
          return <button className="ButtonList-btns" style={colorObj} onClick={this.handleClick.bind(this, c)}>Click me!</button>
        })}
      </div>
    )
  }
}
