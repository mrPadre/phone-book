import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
    constructor (props){
        super (props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="header">
                <button className="header__add-btn" onClick={this.props.handleShow}>
                    <FontAwesomeIcon icon={faUserPlus} className="header__icon"/>
                </button>

            </div>
        )
    }
}
export default Header;