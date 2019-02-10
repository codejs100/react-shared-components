import React, { Component } from 'react';
import "./modal-styles.css";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }

  handleKeyUp(e) {
    const { onClose } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onClose();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }


  render() {
    if (this.props.isOpen === false)
        return null;
    return (
      <React.Fragment>
        <div className="modalContainer">
          <div className="modelClose"><span onClick={e => this.close(e)}>X</span></div>
          <div className="modalDiv">{this.props.children}</div>
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

export default Modal;
