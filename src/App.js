import React, { Component } from 'react';
import ModalCard from "./components/modal";
import CardList from "./components/card-list";


class App extends Component {
constructor (props) {
    super (props);

    this.state = {
        show: false,
        card: [],
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


    render () {

    return (
        <div>
            <button className="card__add-btn" onClick={this.handleShow}>
                Добавить контакт
            </button>
            <div className="card">
                    <CardList select={this.addCard} arrow={this.state.options}/>
                <div className="card__options">
                    <div className="option" style = {{display: this.state.options ? 'flex': 'none'}}>
                        <div className="option__avatar">
                            {this.state.card.avatar}
                        </div>
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

            <ModalCard show={this.state.show} hide={this.handleClose}/>
        </div>
    )
}

}

export default App;
