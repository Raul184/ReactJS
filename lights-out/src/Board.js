import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

/** DEFAULTS*/
  static defaultProps ={
    nrows: 5,
    ncols: 5,
    randomOns: .25
  }

//CLass constructor
  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      board: this.createBoard(),
      hasWon: false
    }
  }

// BOARD Maker
//----------------------------------------
  createBoard() {
    let board = [];
    //rows
    for (let r = 0; r < this.props.nrows; r++){
      let row = [];
      //columns
      for (let c = 0; c < this.props.ncols; c++){
        row.push(Math.random() < this.props.randomOns) //true, true, false,true ,...
      }
      board.push(row);
    }
    return board;
  }

// FLIPPER
//--------------------------------------
  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log(coord);
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    //Declare within same outlook
    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    //FLIp/ Mutate the Board
    flipCell(y , x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y + 1, x); 
    flipCell(y - 1, x);

    //Have you won?
    let hasWon = board.every( row => row.every( cell => !cell));

    this.setState({board, hasWon});
  }

  /** Render game board or winning message. */

  render() {
    if( this.state.hasWon) return <div className="winner">
      <span className='neon-orange'>YOU</span><span className='neon-blue'>WIN</span>
    </div>
    
    let tableBoard = [];
    for (let r = 0; r < this.props.nrows; r++)
    {
      let row = [];
      for (let c = 0; c < this.props.ncols; c++)
      {
        let coord =`${r}-${c}`; 
        row.push(
          <Cell key={coord} isList={this.state.board[r][c]} flipCellsAroundMe={() => this.flipCellsAround(coord)}/>
        );
      }
      tableBoard.push(<tr key={r}>{row}</tr>)
    }
    return (
    // if the game is won, just show a winning msg & render nothing else
      <div>
        <div className="Board-title">
          <div class="neon-orange">Lights</div>
          <div class="neon-blue">Out</div>
        </div>
        <table className="Board">
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;
