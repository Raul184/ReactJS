import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import Clicker from './Clicker' ;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicker />
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'))
