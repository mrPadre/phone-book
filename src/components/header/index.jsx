import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown, faUserPlus} from "@fortawesome/free-solid-svg-icons";


class Header extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            showSelect: false
        }
    }

    render() {
        let filter = this.props.filter;
        let icon = '';
            if (filter !== '') {
            icon = <FontAwesomeIcon icon={filter} className="header__filter-icon"/>
        } else {
            icon = '';
        }


        return(
            <div className="header">
                <div className="header__text" onClick={() => this.props.handleSort()}>
                    Sort
                    <FontAwesomeIcon icon={faSortDown} className="header__arrow"/>
                </div>
                <button className="header__add-btn" onClick={this.props.handleShow}>
                    <FontAwesomeIcon icon={faUserPlus} className="header__icon"/>
                </button>
                <div className="header__text">
                    Filter : {icon}
                </div>
            </div>
        )
    }
}
export default Header;