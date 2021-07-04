import React from 'react';
import './NavLinks.css';

function NavLinks(props) {
    const checkCurrentPath = (path) => {
        return path === window.location.pathname ? "current-link" : "";
    };
    return (
        <ul className="navigation">
            <li className={checkCurrentPath("/")}><a href="/">home</a></li>
            <li className={checkCurrentPath("/about")}><a href="/about">about me</a></li>
            <li className={checkCurrentPath("/resume")}><a href="/resume">résumé</a></li>
            <li className={checkCurrentPath("/thoughts")}><a href="/thoughts">thoughts</a></li>
            <li className={checkCurrentPath("/contact")}><a href="/contact">contact me</a></li>
        </ul>
    );
}

export default NavLinks;