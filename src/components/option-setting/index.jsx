import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const OptionSetting = (props) => {
console.log();
    return (
        <div className="setting" style={{display: props.showSetting ? 'flex' : 'none'}} >
            <button type="button"
                    className="setting__btn-delete"
                    onClick={() => props.handleDeleteCard()}
            > Удалить</button>
            <button
                type="button"
                className="setting__btn-change"
                onClick={() => props.openEditModal()}
            > Редактировать</button>
            <FontAwesomeIcon className="setting__btn-close" icon={faTimes} onClick={() => props.handleClose()}/>

        </div>
    )
};

export default OptionSetting;