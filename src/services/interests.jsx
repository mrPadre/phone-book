import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic, faGuitar, faBriefcase, faFish, faRoute, faCampground, faSchool, faWineBottle, faFilm, faCar, faBicycle, faMotorcycle, faGamepad} from "@fortawesome/free-solid-svg-icons";
export const iconObj = [
    {type: faMusic, name: 'Музыка'},
    {type: faGuitar, name: 'Концерты'},
    {type: faBriefcase, name: 'Работа'},
    {type: faFish, name: 'Рыбалка'},
    {type: faRoute, name: 'Путешествия'},
    {type: faCampground, name: 'Походы'},
    {type: faSchool, name: 'Школа'},
    {type: faWineBottle, name: 'Алкоголизм'},
    {type: faFilm, name: 'кино'},
    {type: faCar, name: 'Автомобили'},
    {type: faBicycle, name: 'Велосипеды'},
    {type: faMotorcycle, name: 'Мотоциклы'},
    {type: faGamepad, name: 'Игры'},
];

class Icon extends React.Component{
    constructor (props) {
        super (props);
        this.state = {}
    }


render() {

    return(
        iconObj.map((icon, i) => {
            let card = this.props.card;
            let filter = card.filter(items =>
                items.interests.includes(icon.type)
            );

            return (
                <div className='interests__box' key={'ico'+i}  id={icon.name + i} onClick={() => this.props.handleInterestsFunc(icon)}>
                    <div className="interests__count">{filter.length}</div>
                    <FontAwesomeIcon icon={icon.type} className="interests__icon" key={icon.name  + i}/>
                    <p className="interests__name">
                        {icon.name}
                    </p>
                </div>
            )
        })

    )

}
}
export default Icon;

