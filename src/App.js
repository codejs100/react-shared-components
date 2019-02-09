import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Menu from "./menu";
import ModelExample from "./shared/model-box/model-example";



class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Shared Components</h1>
        <div className="container-body">
          <Menu />
          <Switch>
            <Route exact path='/model' component={ModelExample}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
