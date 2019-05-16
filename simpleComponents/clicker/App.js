import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import Clicker from './Clicker' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicker />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App /> , document.getElementById('root'))
