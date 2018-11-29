import React from 'react';

function Login(props) {
    return <button onClick={props.onChangeDemo}>{props.isLoggedIn ? 'Logout' : 'Login'}</button>
}

export default Login;
