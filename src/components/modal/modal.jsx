import React from 'react';

const Modal = (props) => {

    const handleCloseModal = event => {
        const { target } = event;
        if (target.classList.contains('modal__window')) {
            props.hideModal();
        }
    };

  return (
      <div className="modal__window"  style={{display: props.show ? 'flex': 'none'}} onClick={handleCloseModal}>
          <div className="modal__body" style={props.modalStyle}>
              <div className="modal__header">
                {props.header}
              </div>
              {props.children}
              {props.footer}
          </div>
      </div>
  )
};
export default Modal;