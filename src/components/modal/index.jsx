import React from 'react';

const ModalCard = (props) => {

    const handleCloseModal = event => {
        const { target } = event;
        if (target.classList.contains('modal__window')) {
            props.hide();
        }
    };

  return (
      <div className="modal__window" id="add_card" style={{display: props.show ? 'flex': 'none'}}>
          <div className="modal__content">
              <div className="modal__header">
                <h3 className="modal__title">
                    Добавить контакт
                </h3>
              </div>
              <div className="modal__body">
                  <input type="text" className="modal__name"/>
                  <input type="phone" className="modal__name"/>
                  <input type="email" className="modal__name"/>
                  <input type="text" className="modal__name"/>
              </div>
              <div className="modal__footer">
                <button type='submit' className="modal__add-card">
                    Добавить
                </button>
                  <button type='button' className="modal__close"> Закрыть </button>
              </div>
          </div>
      </div>
  )
};
export default ModalCard;