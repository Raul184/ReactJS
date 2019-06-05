import React, { Component } from 'react'
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke'
import uuid from "uuid/v4";

export default class JokeList extends Component {
  static defaultProps = {
    num: 10,
    url: "https://icanhazdadjoke.com/"
  };
  constructor(props){
    super(props);
    this.state = { 
      jokes: JSON.parse(localStorage.getItem("jokes") || "[]"),
      loading: false 
    };
     //Avoid duplicity on data collections
    this.seenJokes = new Set(this.state.jokes.map( j => j.text));
    this.handleClick = this.handleClick.bind(this);
  }
  //0. DIDMount
  componentDidMount(){
    if(this.state.jokes.length === 0) this.getJokes();
  }
  //1. JOKES Getter
  async getJokes(){
    try{
      let stock = [];
      let nueJoke;
      while (stock.length < this.props.num) {
        //Get Jokes 
        let joke = await axios.get(this.props.url, { headers: { Accept: "application/json" } 
        });
        //check for duplicates
        nueJoke = joke.data.joke;
        if(!this.seenJokes.has(nueJoke)){
          //save Jokes
          stock.push({ id: uuid(), text: joke.data.joke, votes: 0 });
        } 
        else 
        {
          console.log(`This one is a duplicate joke: ${nueJoke}`);
        }
      }
      //set them into State
      this.setState( st => ({
        loading: false,     //loader Animation
        //what it's there + more
        jokes: [...st.jokes , ...stock]
      }),
      //save localStorage
      () => localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch(e){
        //drop notification
        alert(e);
        // get back to saved ones and display
        this.setState({
          loading: false
        })
      }
  } 
  
  //2. HANDLE Votes + -
  handleVote(id , delta){
     this.setState(
       st => ({
         jokes: st.jokes.map( j => 
            j.id === id ? {...j , votes: j.votes + delta } : j
         )
      }),
      //save
      () => localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    )
  }
  //3. ON CLICK + Jokes from API
  handleClick(){
    this.setState({ loading: true });
    //get jokes
    this.getJokes();
  }
  
  render() {
    if(this.state.loading){
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      )
    }
    let sortedJokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img 
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="emoji"
          />
          <button className="JokeList-btn" onClick={this.handleClick}>New Jokes</button>
        </div>
        <div className="JokeList-jokes">
        {sortedJokes.map( joke => ( 
          <Joke 
            key={joke.id} 
            id={joke.id} 
            topic={joke.text} 
            votes={joke.votes}
            upvote={() => this.handleVote(joke.id , +1)}
            updown={() => this.handleVote(joke.id, -1)}
          />
        ))}
        </div>
      </div>
    )
  }
}
