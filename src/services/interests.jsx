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

const Icon = (props) => {

    return(
        iconObj.map((icon, i) => {

            return (
                <div className="interests__box" onClick={() => props.handleInterestsFunc(icon)}>
                    <FontAwesomeIcon icon={icon.type} className="interests__icon" key={i}/>
                    <p className="interests__name">
                        {icon.name}
                    </p>
                </div>
            )
        })

    )


};
export default Icon;

