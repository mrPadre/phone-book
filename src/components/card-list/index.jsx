import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: ''
        }

    };
    handleSelect = (i) => {
        this.setState({index: i});
    };

    selectCard = (card) => {
        this.props.select(card);
    };

    doubleFunc = (i) => {
        this.selectCard(i);
        this.handleSelect(i);
    };

    render() {

        if (!this.props.resetIndex){
            this.state.index = '';
        }

        this.props.card.sort((a, b) => {
            let nameA=a.name.toLowerCase();
            let nameB=b.name.toLowerCase();

            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;

        }) ;
        return (

            <div className="card__list">
                <div className="test__filter">

                </div>
                {this.props.card.map((card, i) => {
                    const cardItem = ['card__item'];
                    const cardArrow = ['card_arrow'];
                    if (this.state.index === i){
                        cardItem.push("active");
                        cardArrow.push("visible");
                    }





                    return (
                        <div className={cardItem.join(' ')} key={"card" + i}
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
                                    <FontAwesomeIcon icon={item} className="interests__icon" key={item.iconName + i}/>
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