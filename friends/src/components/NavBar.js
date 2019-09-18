import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
    return(
        <header>
            <h1>Friends</h1>
            <NavLink to={'/friendslist'}>List</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </header>
    );
}

export default NavBar;