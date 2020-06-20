import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { isDev } from './lib/helpers';
import Navbar from './components/Navbar';
import Routes from "./components/Routes";

class App extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.setEmail = this.setEmail.bind(this);

        this.state = {
            loggedIn: false,
            email: ''
        }
    }

    login = () => {
        if (isDev()) { console.log("Login function executed") }
        this.setState( { loggedIn: true });
    }
    logout = () => {
        if (isDev()) { console.log("Logout function executed") }
        this.setState( { loggedIn: false });
    }
    setEmail = (email) => {
        if (isDev()) { console.log(`Email logged '${this.state.email}`)}
        this.setState({email: email});
    }

    render() {
        return (
                <Router>
                    <div className="container">
                        <Navbar loggedIn={this.state.loggedIn} email={this.state.email} />
                        <Routes login={this.login} logout={this.logout} setEmail={this.setEmail} />
                    </div>
                </Router>
        );
    }
}

export default App;
