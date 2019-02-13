import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Menu from "./menu";
import ModalExample from "./shared/modal-box/modal-example";
import FlyoutExample from "./shared/flyout-control/flyout-example";



class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Shared Components</h1>
        <div className="container-body">
          <Menu />
          <Switch>
            <Route exact path='/modal' component={ModalExample}/>
            <Route exact path='/flyout' component={FlyoutExample}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
