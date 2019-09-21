import React, { Component } from 'react';
import Modal from "./modal";
import Avatar from "../../services/avatars";
import Select from "../select/select";

const {alex, vania, sindy, katia, john, monia, pablo, smith} = Avatar;
const avatarArr = [];
for(let code in Avatar){
    avatarArr.push({text: code, value: eval(code)});
}


class ModalEditCard extends Component {
    constructor (props) {
        super (props);
        this.state = {

        }

    }

    handleChangeEdit = event => {
        this.props.onChangeInput(event)
    };

    handleEditAccess = () => {

        this.props.closeEditModal();
    };


    render () {



        console.log(this.props.optionCard);
        const modalStyle = {
            width: '600px',
            height: '600px'
        };
        const header = (
            <h3> Редактировать контакт </h3>
        );
        const footer = (
            <div className="modal__footer">
                <button
                    type="success"
                    className="modal__success"
                    onClick={() => this.handleEditAccess()}

                >Изменить</button>
            </div>
        );
        const avaSelect = <Select
            label = "Выберите аватарку"
            value = {this.props.optionCard.avatar}
            name="avatar"
            onChange = {this.handleChangeEdit}
            options = {avatarArr}
        />;

        return (

            <Modal
                modalStyle = {modalStyle}
                header={header}
                footer={footer}
                show={this.props.showEditModal}
                hideModal={this.props.closeEditModal}>
                <div className="modal__content" >
                    <img className="option__avatar" src={this.props.optionCard.avatar} alt=""/>
                    {avaSelect}
                    <div className="modal__line">
                        Имя: <input
                        type="text"
                        name="name"
                        value={this.props.optionCard.name}
                        className="modal__inputs"
                        onChange={this.handleChangeEdit}
                    />
                    </div>
                    <div className="modal__line">
                        Номер: <input
                        type="text"
                        name="phone"
                        value={this.props.optionCard.phone}
                        className="modal__inputs"
                        onChange={this.handleChangeEdit}/>
                    </div>
                    <div className="modal__line">
                        Почта: <input
                        type="text"
                        name="email"
                        value={this.props.optionCard.email}
                        className="modal__inputs"
                        onChange={this.handleChangeEdit}
                    />
                    </div>

                </div>
            </Modal>
        )
    }
}
export default ModalEditCard;