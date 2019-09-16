import React, { Component } from 'react';
import CardList from "./components/card-list";
import ModalAddCard from "./components/modal/modal-add-card";
import Avatar from "./services/avatars";

const {smith, pablo, monia, john, katia, sindy, vania, alex} = Avatar;
class App extends Component {
constructor (props) {
    super (props);

    this.state = {
        show: false,
        card: [
            {
                avatar: smith,
                name: 'Иванов Иван Иванович',
                phone: '+79111111111',
                email: 'test@test.ru',
                interests: ['музыка', 'работа', 'поход']
            },
            {
                avatar: pablo,
                name: 'Петров Антоха',
                phone: '+79057856473',
                email: 'test@test.ru',
                interests: ['рыбалка', 'собутыльник']
            }
        ],
        cardOption: [],
        index: 0,
        options: false

};
}
    addCard = (value) => {
    this.setState({card: value, options: true});

    };

    handleShow = () => {
    this.setState({show: true})
    };

    handleClose = () => {
      this.setState({show: false})
    };

    handleAddCards = (avatar, name, phone, email, interests) => {
        this.state.card.push({
            avatar: avatar,
            name: name,
            phone: phone,
            email: email,
            interests: [interests]
        })
    };

    render () {
    return (

        <div>
            <button className="card__add-btn" onClick={this.handleShow}>
                Добавить контакт
            </button>
            <div className="card">
                    <CardList
                        select={this.addCard}
                        cards={this.state.card}/>
                <div className="card__options">
                    <div className="option" style = {{display: this.state.options ? 'flex': 'none'}}>
                        <img src={this.state.card.avatar} className="option__avatar" alt = '' />
                        <div className="option__info">
                           <p className="option__name">
                               {this.state.card.name}
                           </p>
                            <p className="option__phone">
                               Телефон: {this.state.card.phone}
                            </p>
                            <p className="option__email">
                               Почта: {this.state.card.email}
                            </p>
                        </div>
                        <div className="option__interests">
                            {this.state.card.interests}
                        </div>
                    </div>
                </div>
            </div>
            <ModalAddCard show={this.state.show} hideModal={this.handleClose} avatar={'smith'} handleAddCard={this.handleAddCards}/>
        </div>
    )
}

}

export default App;
