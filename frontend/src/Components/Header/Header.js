import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/">Main</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new/post">New post</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;