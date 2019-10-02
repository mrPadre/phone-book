import React, { Component } from 'react';
import CardList from "./components/card-list";
import ModalAddCard from "./components/modal/modal-add-card";
import Avatar from "./services/avatars";
import CardOption from "./components/card-option";
import ModalEditCard from "./components/modal/modal-edit-card";
import Icon from "./services/interests";
import Header from "./components/header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan} from "@fortawesome/free-solid-svg-icons";


const {smith, pablo} = Avatar;

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
                id: 0
            },
            {
                avatar: pablo,
                name: 'Петров Антоха',
                phone: '+79057856473',
                email: 'test@test.ru',
                interests: [],
                id: 1
            }
        ],
        options: false,
        index: 0,
        showModalEdit: false,
        filter: "",
        id: 2

};
}

    componentDidMount() {
        localStorage.getItem('card') && this.setState({
            card: JSON.parse(localStorage.getItem('card'))
        });
        localStorage.getItem('id') && this.setState({
            id: JSON.parse(localStorage.getItem('id'))
        });
        localStorage.getItem('index') && this.setState({
            index: JSON.parse(localStorage.getItem('index'))
        })
    }


    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('card', JSON.stringify(nextState.card));
        localStorage.setItem('id', JSON.stringify(nextState.id));
        localStorage.setItem('index', JSON.stringify(nextState.index));
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
        const typeName = target.name;
        let i = this.state.index;
        let cards = [...this.state.card];
        let card = {...cards[i]};
        card[typeName] = value;
        cards[i] = card;
        this.setState({card: cards});
    };

    handleInterestsFunc = (icon) => {
        let i = this.state.index;
        let cards = [...this.state.card];
        let card = {...cards[i]};
        let filter = card.interests.some((item) => {
            return item.iconName === icon.type.iconName
        });
        if (this.state.options) {

            if (filter === false) {
                console.log("iconType", icon.type.iconName);
                card.interests.push(icon.type);
            } else if (!this.state.options) {
                card.interests.splice(icon.type, icon.type);
            }
            cards[i] = card;
            this.setState({card: cards})
        } else {

            this.setState({filter: icon.type});
            this.handleFilterCard();
        }

            };

    handleIconClose = (i) => {
        let cards = [...this.state.card];
        let index = this.state.index;
        let card = cards[index];
        card.interests.splice(i, 1);
        cards[index] = card;
        this.setState({card: cards})
    };

    handleAddCards = (avatar, name, phone, email, interests) => {
        let cards = [...this.state.card];

        let card = {
            avatar: avatar,
            name: name,
            phone: phone,
            email: email,
            interests: [],
            id: this.state.id
        };
        cards.push(card);
        let newId = this.state.id + 1;
        this.setState({id: newId});
        this.setState({card: cards});

    };

    handleSelect = (i) => {
        this.setState({index: i});
    };
    handleSort = () => {
        let card = this.state.card;

        let sortCard = card.sort((a, b) => {
            let nameA=a.name.toLowerCase();
            let nameB=b.name.toLowerCase();

            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
        }) ;
        this.setState({card: sortCard});
    };

    handleDeleteCard = () => {
        const itemDelete = this.state.card;
        let i = this.state.index;
        if (itemDelete.length > 1) {
            itemDelete.splice(i, 1);
            this.setState({card: itemDelete});
            this.setState({index: this.state.card.length - 1});
            this.optionClose();
        }
    };

    handleFilterCard = () => {
      if (this.state.filter !== '') {
          let filter = this.state.filter;
          let newCard = this.state.card.filter((item) => item.interests.includes(filter));
          this.setState({filterCard: newCard});

      }
    };

    handleResetFilter =() => {
        this.setState({filter: ""})
    };

    render () {
        const index = this.state.index;
        let mainCard = this.state.card[index];



    return (

        <div className="container">
            <Header handleShow={this.handleShow} handleSort={this.handleSort} filter={this.state.filter}/>
            <div className="card">
                    <CardList
                        select={this.addCard}
                        card={this.state.card}
                        close={this.optionClose}
                        resetIndex={this.state.options}
                        handleSelect={this.handleSelect}
                        optionCard={mainCard}
                        filter={this.state.filter}
                        index = {this.state.index}
                    />
               <CardOption
                    options={this.state.options}
                    optionCard={mainCard}
                    optionClose={this.optionClose}
                    allCard={this.state.card}
                    indexSelectCard={index}
                    handleDeleteCard={this.handleDeleteCard}
                    openEditModal={this.showEditModal}
                    handleIconClose={this.handleIconClose}
                    handleSelect={this.handleSelect}
               />
            </div>
            <div className="container__interests">
                <div className="interests" id='interests-1'>
                    <div className='reset__box' onClick={this.handleResetFilter}>
                        <FontAwesomeIcon icon={faBan}/>
                        <p className="reset__name">
                            Сбросить<br/> фильтр
                        </p>
                    </div>
                    <Icon handleInterestsFunc={this.handleInterestsFunc} card={this.state.card}/>

                </div>
            </div>


            <ModalAddCard show={this.state.show}
                          hideModal={this.handleClose}
                          avatar={'smith'}
                          newCard={this.handleAddCards}/>
            <ModalEditCard
                showEditModal={this.state.showModalEdit}
                closeEditModal={this.closeEditModal}
                optionCard={mainCard}
                onChangeInput={this.handleInputEdit}
                allCard={this.state.card}
                indexSelectCard={index}
            />
        </div>
    )
}

}

export default App;
