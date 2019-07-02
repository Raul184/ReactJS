import React, { Component } from 'react'
import Axios from 'axios';
import Joke from "./Joke";
import { withStyles } from "@material-ui/styles";
//key ids
const uuidv4 = require('uuid/v4');

const styles = {
  root: {
    border: "1px solid black",
    boxShadow: "3px 3px 5px 10px aliceblue",
    padding: "10px",
    width: "100%",
    marginBottom: "20px"
  },
  row: {
    fontSize: ".8rem"
  }
}

class TablaJokes extends Component {
  static defaultProps = {
    url: "https://icanhazdadjoke.com/search",
    ncols: 5,
    nrows: 4
  }
  
  constructor(props){
    super(props);
    this.state = {
      jokes: [],
      board: []
    }
  }
  
  //component DidMount
  componentDidMount(){
    //get info to display Table
    this.state.jokes.length === 0 && this.getJokes();
  }

  //Jokes Getter
  async getJokes(){
    try{
      //send request
      const request = await Axios.get(this.props.url, {headers: { Accept: "application/json"}});
      //formatted response
      const response = request.data.results;
      //set
      this.setState({
        jokes : response
      })
      //update Board
      this.createBoard();
    }
    catch(e)
    {
      alert(e);
    }
  }
  //Table creation
  createBoard() {
    let boardF = [];
    let counter = 0;
    //rows
    for (let r = 0; r < this.props.nrows; r++) {
      let row = [];
      //columns
      for (let c = 0; c < this.props.ncols; c++) {
        row.push(
          <Joke id={uuidv4()} jokes={this.state.jokes[counter].joke} />)
        counter++ 
      }
      boardF.push(<tr key={r} className={this.props.classes.row}>{row}</tr>);
    }
    //format created for table ready to go
    this.setState({
      board: boardF
    });
  }

  render() {
    let tableBoard = this.state.board;
    return (
      <div className="TablaJokes">
        {
          <table className={this.props.classes.root}>
            <tbody>
              {tableBoard}
            </tbody>
          </table>
        }
      </div>
    )
  }
}
export default withStyles(styles)(TablaJokes);