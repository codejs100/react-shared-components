import React, { Component } from 'react'

import Modal from "./modal/modal";

export default class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  modalHandler = () => {
    this.setState({
      isModalOpen: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div>
            <h2>Modal-Box component</h2>
            <div className="divBody">
                <button onClick={this.modalHandler} className="btnClass">Open Modal Box</button>
                <Modal isOpen={this.state.isModalOpen} onClose={this.closeModalHandler}>
                  <h1>Modal title</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus sunt recusandae explicabo enim ex. Optio vel porro facere, ea et nam culpa quaerat recusandae natus doloremque velit, voluptatibus ab.</p>
                  <p><button onClick={this.closeModalHandler}>Close</button></p>
                </Modal>
            </div>
      </div>
    )
  }
}
