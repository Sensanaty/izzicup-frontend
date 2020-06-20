import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import PartList from "./PartList";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" render={ (props) => ( <Login loggedIn={this.props.loggedIn} login={this.props.login} {...props} /> )} />
                <Route path="/logout" render={ (props) => ( <Logout loggedIn={this.props.loggedIn} logout={this.props.logout} {...props} /> )} />
                <Route path="/parts" component={PartList} />
            </Switch>
        )
    }
}

export default Routes;