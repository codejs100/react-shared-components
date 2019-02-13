import React, { Component } from 'react';
import Flyout from './flyout/flyout';

export default class FlyoutExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlyoutOpen: false
    }
  }

  openHandler = () => {
    this.setState({
      isFlyoutOpen: true
    });
  }

  closeHandler = () => {
    this.setState({
      isFlyoutOpen: false
    });
  }

  render() {
    return (
      <div>
      <h2>Flyout component</h2>
            <div className="divBody">
                <button onClick={this.openHandler} className="btnClass">Open Flyout</button>
                <Flyout isOpen={this.state.isFlyoutOpen} onClose={this.closeHandler}>
                  <h1>Flyout title</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus sunt recusandae explicabo enim ex. Optio vel porro facere, ea et nam culpa quaerat recusandae natus doloremque velit, voluptatibus ab.</p>
                </Flyout>
            </div>
      </div>
    )
  }
}
