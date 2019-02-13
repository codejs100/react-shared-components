import React, { Component } from 'react';
import './flyout-style.css';

export default class Flyout extends Component {
  render() {
    if (this.props.isOpen === false) {
        return (<div id="flyoutWrapper"  className="hide"></div>);
    }
        
    return (
      <React.Fragment>
        <div id="flyoutWrapper" className="flyout-container show">
            {this.props.children}
        </div>
        <div className="backdropDiv" onClick={e => this.close(e)}/>
      </React.Fragment>
    )
  }

  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}
