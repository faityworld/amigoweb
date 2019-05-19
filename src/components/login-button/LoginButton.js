import React from 'react';
import './LoginButton.scss';
import { Link } from 'react-router-dom';

function LoginButton(props) {

    function handleClick() {
        props.logOut()
    }

    return (
        <>
        {props.login ? (<button className="login-button" onClick = { handleClick } >Logout</button>): (<Link to="/login" className="login-button">Login</Link>)}
        </>
    )
}

export default LoginButton;