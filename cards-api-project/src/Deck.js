import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';
import './Deck.css';

export default class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      deck : null,
      card : []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // life-cicles
  async componentDidMount(){
    console.log("DidMount");
    //request
    let url = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
    let request = await url;
    let response = request.data;
    //save 
    this.setState({
      deck : response  
    })
  }
  //ON Click
  async handleClick(){
    console.log('click');
    //get Card
    try{
      let request = await axios.get(` https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`);
      if(this.state.deck.remaining===0) {
        throw new Error("No cards remaining!")
      }
      //update State
      let update = request.data;
      //card Info
      let card = update.cards[0];
      this.setState(st => ({
        deck: update,
        card: [
          ...st.card,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`
          }
        ]
      }))
      //Display

    } catch(err){
      alert(err);
    }
  }

  render() {
    const cardImg = this.state.card.map( card => (
      <Card key={card.id} name={card.name} image = {card.image} />
    ))
    return (
      <div className="Deck">
        <h1 className="Deck-title" style={{color: "white"}}>Card Dealer</h1>
        <h2 className="Deck-title subtitle">A little demo made with react</h2>
        <div className="Deck-cardArea">{cardImg}</div>
        
        <button className="Deck-btn" onClick={this.handleClick}>Give me more</button>
      </div>
    )
  }
}
