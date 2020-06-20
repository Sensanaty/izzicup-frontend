import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
    localStorage.removeItem('token');
    props.logout();
    return <Redirect to='/' />
}

export default Logout;