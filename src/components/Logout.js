import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    localStorage.removeItem('token');
    this.props.logout();
    return <Redirect to='/' />
}

export default Logout;