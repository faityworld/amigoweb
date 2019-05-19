import React from 'react';
import './HeaderButton.scss';

function HeaderButton(props) {
    console.log('props in HeaderBUtton: ', props.clickButton);
    function handleClick() {
        props.clickMenuButton(props.clickButton);
    }

    return (
        <button className={ props.floatRight? "header-button header-button_right" : "header-button"} onClick = {handleClick} >
            <span className="header-button__bar"></span>
            <span className="header-button__bar"></span>
            <span className="header-button__bar"></span>
        </button>
    )
}

export default HeaderButton;