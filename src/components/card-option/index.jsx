import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faCogs,
    faEnvelope,
    faTimes, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import OptionSetting from "../option-setting";
import defAvatar from "../../images/avatars/ava4.jpg";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import Droppable from "../dnd/droppable";
import Draggable from "../dnd/draggable";


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
        if (!this.props.options) {
            this.state.settingShow  = false;
        }
        let ava = '';
        if (this.props.optionCard.avatar === undefined){
            ava = defAvatar
        } else {
            ava = this.props.optionCard.avatar;
        }
        let phone = `tel:${this.props.optionCard.phone}`;
        let email = `mailto:${this.props.optionCard.email}`;

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
                    <img src={ava}
                         className="option__avatar" alt=''/>
                    <div className="option__info">
                        <p className="option__name">
                            {this.props.optionCard.name}
                        </p>
                        <div className="option__phone">
                            <FontAwesomeIcon icon={faPhone}/> <a href={phone} >{this.props.optionCard.phone}</a>

                        </div>
                        <div className="option__phone">
                            <FontAwesomeIcon icon={faEnvelope}/> <a href={email} >{this.props.optionCard.email}</a>

                        </div>
                    </div>
                    <span className="option__title">Общие интересы:</span>

                    <div className="option__interests">


                        {this.props.optionCard.interests.map((item,i) => (  <div
                className="interests__options-box"
                draggable="true"
                key={item + i}
                >
                            <Draggable id={i} >
                                <FontAwesomeIcon icon={item} className="interests__icon" key={'3'+i} id={i}/>

                                <FontAwesomeIcon icon={faTimes} key={'close'+ i} className="interests__close" onClick={() => this.props.handleIconClose(i)} id={i}/>
                            </Draggable>
                            </div>
                        ))}
                    </div>
                    <Droppable  id={'drop1'} close={(event) => this.props.handleIconClose(event)}>
                    <div className="option__delete">
                        <FontAwesomeIcon icon={faTrashAlt} className="option__delete-icon"/>
                    </div>
                    </Droppable>
                </div>

            </div>
        )
    }
}
export default CardOption;