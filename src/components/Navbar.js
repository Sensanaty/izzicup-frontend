import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.scss';

class Navbar extends Component {

    renderLinks = () => {
        if (this.props.loggedIn) {
            return (
                <>
                    <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/parts">Parts</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/logout">Log Out</NavLink></li>
                </>
            )
        }
        return (<li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login">Log In</NavLink></li>)
    }

    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Navbar;