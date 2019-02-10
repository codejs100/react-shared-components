import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Menu from "./menu";
import ModalExample from "./shared/modal-box/modal-example";



class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Shared Components</h1>
        <div className="container-body">
          <Menu />
          <Switch>
            <Route exact path='/modal' component={ModalExample}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
