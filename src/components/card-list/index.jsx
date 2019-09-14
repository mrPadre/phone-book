import React, { Component } from 'react';



class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [
                {
                    avatar: '',
                    name: 'Иванов Иван Иванович',
                    phone: '+79111111111',
                    email: 'test@test.ru',
                    interests: ['музыка', 'работа', 'поход']
                },
                {
                    avatar: '',
                    name: 'Петров Антоха',
                    phone: '+79057856473',
                    email: 'test@test.ru',
                    interests: ['рыбалка', 'собутыльник']
                }
            ],
            style: "none"
        }

    };
    handleAddCard = (avatar, name, phone, email, interests) => {
        this.setState( this.state.card.push({
            avatar: avatar,
            name: name,
            phone: phone,
            email: email,
            interests: [interests]
        }) );
    };

    showArrow = (event) => {
    };

    render() {

        return (
            <div className="card__list">
                {this.state.card.map((card, i) => {
                    return (
                        <div className='card__item' key={i}
                             onClick={() => this.props.select(card)}>
                            <div className="card__arrow" > </div>
                            <div className="card__avatar">
                                {card.avatar}
                            </div>
                            <div className="card__info">
                                <p className="card__name">
                                    {card.name}
                                </p>
                                <p className="card__phone">
                                    {card.phone}
                                </p>
                            </div>
                            <div className="card__interests">
                                {card.interests.join(', ')}
                            </div>
                        </div>
                    )
                })
             }
         </div>
        )

    }
}
export default CardList;