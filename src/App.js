import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/Navbar';
import Routes from "./components/Routes";

class App extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            loggedIn: false
        }
    }

    login = () => {
        console.log("Login function executed");
        this.setState( { loggedIn: true });
    }
    logout = () => {
        console.log("Logout function executed");
        this.setState( { loggedIn: false });
    }

    render() {
        return (
                <Router>
                    <div className="container">
                        <Navbar loggedIn={this.state.loggedIn} />
                        <Routes login={this.login} logout={this.logout} />
                    </div>
                </Router>
        );
    }
}

export default App;
