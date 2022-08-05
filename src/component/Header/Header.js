import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/user/add'}>Add User</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
            </nav>
        </div>
    );
};

export default Header; <h2>this is header</h2>