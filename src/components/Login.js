import React, { Component } from 'react';
import { post } from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value
        const request = {"email": email, "password": password};
        post('http://localhost:3000/v1/authenticate', request)
            .then(response => {
                console.log(`Token Received: ${response.data.token}`)
                localStorage.setItem("token", response.data.token);
                this.props.history.push('/');
                // eslint-disable-next-line no-unused-expressions
                this.props.login();
            })
            .catch(error => console.log("Error on login", error));
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input name="email" id="email" type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input id="password" type="password" className="form-control" />
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;