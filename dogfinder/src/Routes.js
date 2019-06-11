import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import DogDetails from './DogDetails';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Hello World</h1>}
          />
          <Route
            exact
            path="/dogs/:name"
            Component={<DogDetails/>}
          />
        </Switch>
      </div>
    )
  }
}
