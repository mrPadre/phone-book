import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    };

    selectCard = (card) => {
        this.props.select(card);
    };

    doubleFunc = (i) => {
        this.selectCard(i);
        this.props.handleSelect(i);
    };



    render() {


        let newCard = this.props.card;


        return (

            <div className="card__list">
                <div className="test__filter">

                </div>
                {newCard.map((card, i) => {
                    let cardItem = ['card__item'];
                    const cardArrow = ['card_arrow'];
                    let filter = this.props.filter;
                    let someIcon = card.interests.some(item => {
                        return item.iconName === filter.iconName
                    });
                    if (this.props.index === i){
                        cardItem.push("active");
                        cardArrow.push("visible");
                    }
                    if (filter !== '') {

                            if (!someIcon) {
                               cardItem.push("hide");

                        }
                    }
                    return (
                        <div className={cardItem.join(' ')} key={Math.random() + i}
                             onClick={() => this.doubleFunc(i)}>

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
                                {card.interests.map((item) => (
                                    <FontAwesomeIcon icon={item} className="interests__icon" key={Math.random() + i}/>
                                ))}
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