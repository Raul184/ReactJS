import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';

export default class Pokedex extends Component {
  render() {
    let title;
    this.props.isWinner ? 
      title = <h2 className="Pokedex-winner">Winning Hand</h2> :
      title = <h2 className="Pokedex-loser">Losing Hand</h2>
    return (
      <div className="Pokedex">
        {title}
        <h3>Total Experience: {this.props.exp}</h3>
        <div className="Pokedex-cards">
          {this.props.pokemon.map( p => (
            <Pokecard 
              id={p.id} 
              name={p.name} 
              type={p.type} 
              exp={p.base_experience}
            />
          ))}
        </div>          
      </div>
    )
  }
}
