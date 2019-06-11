import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList.js';

export default class Routes extends Component {
  render() {
    const getDog = props => { 
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs}/>}
          />
          <Route
            exact
            path="/dogs/:name"
            // RENDER automatically passes => route props FOR ME history/location/match
            render={getDog}  
          />
          <Redirect to='/dogs'/>
        </Switch>
      </div>
    )
  }
}
