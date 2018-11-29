import React from 'react';
import { Button, Icon } from 'react-materialize';

function Login(props) {
    return (
        <Button onClick={props.onChangeDemo}>{props.isLoggedIn ? 'Logout' : 'Login'}
            <Icon left>{props.isLoggedIn ? 'power_settings_new' : 'exit_to_app'}</Icon>
        </Button>
    )
}

export default Login;
