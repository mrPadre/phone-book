import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTimes
} from '@fortawesome/free-solid-svg-icons';


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
              <div className="btn__close" >
                <FontAwesomeIcon className="btn__close-icon" icon={faTimes} onClick={props.hideModal}/>
              </div>
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