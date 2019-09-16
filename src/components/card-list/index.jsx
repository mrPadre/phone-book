import React, { Component } from 'react';
import Avatar from "../../services/avatars";

const { smith, pablo, monia, alex, john, katia, sindy, vania } = {...Avatar};

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.cards,
            active: false,
            index: []
        }

    };

    handleAddCard = (avatar, name, phone, email, interests) => {
        this.state.card.push({
            avatar: avatar,
            name: name,
            phone: phone,
            email: email,
            interests: [interests]
        })

    };

    activeCard = (i) => {
        this.setState({index: i});
    };

    selectCard = (card) => {
        this.props.select(card);
    };

    doubleFunc = (card, i) => {
        this.selectCard(card);
        this.activeCard (i);
    };

    render() {

        return (
            <div className="card__list">
                {this.state.card.map((card, i) => {
                    const cardItem = ['card__item'];
                    const cardArrow = ['card_arrow'];
                    if (this.state.index === i){
                        cardItem.push("active");
                        cardArrow.push("visible");
                    }
                    return (
                        <div className={cardItem.join(' ')} key={i}
                             onClick={() => this.doubleFunc(card, i)}>
                            <div className={cardArrow.join(' ')} > </div>
                            <div className="card__avabox">

                            <img className="card__avatar" src={card.avatar} alt=""/>

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