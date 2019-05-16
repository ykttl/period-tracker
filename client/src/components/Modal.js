import React from 'react';
import Inputs from './Inputs';
import '../css/App.css';
import '../css/modal.css';

class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.showModal
      ? 'modal display-block'
      : 'modal display-none';

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.children}
          <button onClick={this.props.handleClose}>
            {' '}
            <i class="material-icons">close</i>
          </button>
          <p> {this.props.dateID}</p>
          <Inputs dateID={this.props.dateID} dateIDms={this.props.dateIDms} />
        </section>
      </div>
    );
  }
}

export default Modal;
