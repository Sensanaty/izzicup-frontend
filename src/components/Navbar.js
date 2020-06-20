import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    renderLinks = () => {
        if (this.props.loggedIn) {
            return (
                <>
                    <li className="nav-item"><p className="nav-text">Logged in as {this.props.email}</p></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/parts">Parts</NavLink></li>
                    <li className="nav-item logout"><NavLink className="nav-link" to="/logout">Log Out</NavLink></li>
                </>
            )
        } else return (<li className="nav-item login"><NavLink className="nav-link" to="/login">Login</NavLink></li>)
    }

    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <NavLink className="nav-image-link" to='/'><li className="nav-logo"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" aria-hidden='true' className="nav-logo"/></li></NavLink>
                    { this.renderLinks() }
                </ul>
            </nav>
        )
    }
}

export default Navbar;