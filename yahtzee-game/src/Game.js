import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map( d => 5), //[]
      locked: Array(NUM_DICE).fill(false),  // dices ALL unlocked
      rollsLeft: NUM_ROLLS,
      rolling: false, //Animation on Dices
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }

  //Animation method
  animateRoll(){
    this.setState({ rolling: true}, () => {
      setTimeout(this.roll, 1300);
    }) 
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false
    }));
  }

  toggleLocked(idx) {
    if(this.state.rollsLeft > 0 && !this.state.rolling){
    // toggle whether idx is in locked or not
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),   // keep these ones unlocked
          !st.locked[idx],              // flip this one
          ...st.locked.slice(idx + 1)   // keep these ones unlocked
        ]
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename. Once per game  
    if(this.state.scores[rulename] === undefined){
      this.setState(st => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        rollsLeft: NUM_ROLLS,
        locked: Array(NUM_DICE).fill(false)
      }));
    }
    this.roll();
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              disabled={this.state.rollsLeft===0}
              rolling={this.state.rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={
                  this.state.locked.every(x => x) || this.state.rollsLeft === 0
                }
                onClick={this.animateRoll}
              >
                {this.state.rollsLeft} Rerolls Left
              </button>
            </div>
          </section>
        </header>
        <div className="test">
          {
            typeof(this.state.dice[0]) === 'number' ? 
              <ScoreTable doScore={this.doScore} scores={this.state.scores} /> :
              ""
          }
        </div>
      </div>
    );
  }
}

export default Game;
