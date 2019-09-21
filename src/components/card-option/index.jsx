import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faCogs} from "@fortawesome/free-solid-svg-icons";
import OptionSetting from "../option-setting";
import {iconObj} from "../../services/interests";


class CardOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionCard: this.props.optionCard,
            options: this.props.options,
            settingShow: false,
            indexSelectCard: this.props.indexSelectCard,
            showModalEdit: false
        }

    }

    showSettings = () => {
        this.setState({settingShow: true })
        };
    hideSettings = () => {
        this.setState({settingShow: false })
    };

    handleCloseOptions = () => {
        this.props.optionClose();
        this.hideSettings();
    };

    render() {

        return (
            <div className="card__options">
                <OptionSetting
                    showSetting={this.state.settingShow}
                    handleClose ={this.hideSettings}
                    openEditModal={this.props.openEditModal}
                    handleDeleteCard={this.props.handleDeleteCard}

                />
                <div className="option"
                     style={{display: this.props.options ? 'flex' : 'none'}}>
                    <div className="option__menu">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft}
                                         className="option__menu-icon"
                                         onClick={this.handleCloseOptions}/>
                        <FontAwesomeIcon
                            icon={faCogs}
                            className="option__menu-icon"
                            onClick ={this.showSettings}/>
                    </div>
                    <img src={this.props.optionCard.avatar}
                         className="option__avatar" alt=''/>
                    <div className="option__info">
                        <p className="option__name">
                            {this.props.optionCard.name}
                        </p>
                        <p className="option__phone">
                            Телефон: {this.props.optionCard.phone}
                        </p>
                        <p className="option__email">
                            Почта: {this.props.optionCard.email}
                        </p>
                    </div>
                    <div className="option__interests">
                        {this.props.optionCard.interests.map((item,i) => (
                            <FontAwesomeIcon icon={item} className="interests__icon" key={3+i}/>
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}
export default CardOption;