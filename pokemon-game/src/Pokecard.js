import React , { Component } from 'react';
import './Pokecard.css';

let pokeApi ='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//Method for API
let padToThree = num => ( num <= 999 ? `00${num}`.slice(-3) : num)
export default class Pokecard extends Component {
  render() {
    let pokeImg = `${pokeApi}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={pokeImg} alt={this.props.name}/>
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">Exp: {this.props.exp}</p>  
      </div>
    );
  }
}
