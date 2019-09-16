import React, { Component } from 'react';
import Modal from "./modal";
import Avatar from "../../services/avatars";
import Select from "../select/select";

const {alex, vania, sindy, katia, john, monia, pablo, smith} = Avatar;
const avatar = [];
for(let code in Avatar){
    avatar.push({text: code, value: eval(code)});
}


class ModalAddCard extends Component {
    constructor (props) {
        super (props);
        this.state = {
            avatar: smith,
            name: '',
            phone: '',
            email: '',
            interests: ''
        }

    }
    onChangeName = (event) => {
      this.setState({name: event.target.value})
    };
    onChangePhone = (event) => {
        this.setState({phone: event.target.value})
    };
    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    };
    onChangeInterests = (event) => {
        this.setState({interests: event.target.value})
    };

    handleSelectChange = event => {
      this.setState({avatar: event.target.value})
    };

    handleAccess = () => {
        this.props.handleAddCard(this.state.avatar,this.state.name,this.state.phone,this.state.email,this.state.interests);
        this.props.hideModal();
    };

    render () {
        const modalStyle = {
            width: '600px',
            height: '600px'
        };
        const header = (
            <h3> Добавить контакт </h3>
          );
        const footer = (
            <div className="modal__footer">
                <button
                    type="success"
                    className="modal__success"
                    onClick={() => this.handleAccess()}

                >Добавить</button>
                <button type='button' className="modal__close" onClick={() => this.props.hideModal()} > Закрыть </button>
            </div>
        );
        const select = <Select
            label = "Выберите аватарку"
            value = {this.state.avatar}
            onChange = {this.handleSelectChange}
            options = {avatar}
        />;

        return (

            <Modal
            modalStyle = {modalStyle}
            header={header}
            footer={footer}
            show={this.props.show}
            hideModal={this.props.hideModal}>
             <div className="modal__content">
                 <img className="option__avatar" src={this.state.avatar} alt=""/>
                 {select}
              <div className="modal__line">
                  Имя: <input
                  type="text"
                  value={this.state.name}
                  className="modal__inputs"
                  onChange={this.onChangeName}
              />
              </div>
                 <div className="modal__line">
                     Номер: <input
                     type="text"
                     value={this.state.phone}
                     className="modal__inputs"
                     onChange={this.onChangePhone}/>
                 </div>
                 <div className="modal__line">
                     Почта: <input
                     type="text"
                     value={this.state.email}
                     className="modal__inputs"
                     onChange={this.onChangeEmail}
                 />
                 </div>
                 <div className="modal__line">
                     Интересы: <input
                     type="text"
                     value={this.state.interests}
                     className="modal__inputs"
                     onChange={this.onChangeInterests}
                 />
                 </div>
            </div>
            </Modal>
        )
    }
}
export default ModalAddCard;