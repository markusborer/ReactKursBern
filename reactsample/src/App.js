import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    onChange = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn});
    }


    render() {
        let welcomeMessage = '';
        if (this.state.isLoggedIn) {
            welcomeMessage = 'Welcome ' + this.props.name;
        }
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main>
                <Timer />
                <Login isLoggedIn={this.state.isLoggedIn} onChangeDemo={this.onChange} />
                <p>{welcomeMessage}</p>
            </main>
          </div>
        );
  }
}

export default App;
