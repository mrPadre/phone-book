import React, { Component } from 'react';
import CardList from "./components/card-list";
import ModalAddCard from "./components/modal/modal-add-card";
import Avatar from "./services/avatars";
import CardOption from "./components/card-option";
import ModalEditCard from "./components/modal/modal-edit-card";
import Icon, {iconObj} from "./services/interests";
import DndWindow from "./components/test-dnd/main.dnd";

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
                interests: [],

            },
            {
                avatar: pablo,
                name: 'Петров Антоха',
                phone: '+79057856473',
                email: 'test@test.ru',
                interests: []
            }
        ],
        optionCard: [],
        options: false,
        index: 0,
        showModalEdit: false,
        sort: []


};
}
    addCard = (value) => {
    this.setState({index: value, options: true});
    };

    optionClose = () => {
      this.setState({options: false});
    };

    handleShow = () => {
    this.setState({show: true});
    };

    handleClose = () => {
      this.setState({show: false});
    };

    closeEditModal = () => {
        this.setState({showModalEdit: false })
    };
    showEditModal =  () => {
        this.setState({showModalEdit: true})
    };
    handleInputEdit = (event) => {
        const target = event.target;
        const value = target.value;
        const typeNmae = target.name;
        let i = this.state.index;
        let cards = [...this.state.card];
        let card = {...cards[i]};
        card[typeNmae] = value;
        cards[i] = card;
        this.setState({card: cards});
    };

    handleInterestsFunc = (icon) => {
        let i = this.state.index;
        let cards = [...this.state.card];
        let card = {...cards[i]};
      if (this.state.options) {

          if (card.interests.includes(icon.type) === false) {
              card.interests.push(icon.type);
          } else {
              card.interests.splice(icon.type, icon.type);
          }
          cards[i] = card;
          this.setState({card: cards})
      }

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


    handleEdit = () => {
        const editCard = this.state.card;
        editCard[this.state.index] = {
            avatar: this.state.avatar,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            interests: this.state.interests
        };
        this.setState({card: editCard})
    };
    handleDeleteCard = () => {
        const itemDelete = this.state.card;
        let i = this.state.index;
        if (itemDelete.length > 1) {
            itemDelete.splice(i, 1);
            this.setState({card: itemDelete})
        }
    };


    resetIndex = () => {
        this.setState({index:0});
    };

    render () {
        const index = this.state.index;
        let mainCard = this.state.card[index];

        if (mainCard === undefined) {
            mainCard = this.state.card[index -1];
        } else if (this.state.index === undefined) {
           this.resetIndex();
            }

        console.log(this.state.card.interests);


    return (

        <div>
            <button className="card__add-btn" onClick={this.handleShow}>
                Добавить контакт
            </button>
            <div className="card">
                    <CardList
                        select={this.addCard}
                        card={this.state.card}
                        close={this.optionClose}
                        resetIndex={this.state.options}
                        activeItem={this.handleSelect}
                        optionCard={mainCard}
                    />
               <CardOption
                    options={this.state.options}
                    optionCard={mainCard}
                    optionClose={this.optionClose}
                    allCard={this.state.card}
                    indexSelectCard={index}
                    handleEdit={this.handleEdit}
                    handleDeleteCard={this.handleDeleteCard}
                    openEditModal={this.showEditModal}
               />
            </div>
            <div className="interests">
                <Icon handleInterestsFunc={this.handleInterestsFunc}/>

            </div>
            <ModalAddCard show={this.state.show}
                          hideModal={this.handleClose}
                          avatar={'smith'} newCard={this.handleAddCards}/>
            <ModalEditCard
                showEditModal={this.state.showModalEdit}
                closeEditModal={this.closeEditModal}
                optionCard={mainCard}
                handleEdit={this.handleEdit}
                onChangeInput={this.handleInputEdit}
                allCard={this.state.card}
                indexSelectCard={index}
            />
        </div>
    )
}

}

export default App;
