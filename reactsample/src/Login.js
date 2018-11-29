import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    onClick = (e) => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn});
    }

    render() {
        let buttonText = 'Login';
        let welcomeMessage = '';
        if (this.state.isLoggedIn) {
            buttonText = 'Logout';
            welcomeMessage = 'Welcome ' + this.props.name;
        }
        return (
            <>
                <button onClick={this.onClick}>{buttonText}</button>
                <p>{welcomeMessage}</p>
            </>
        )
    }
}

export default Login;
