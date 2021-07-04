import React from 'react';
import './Nav.css';
import BusinessCard from './BusinessCard.js';
import NavLinks from './NavLinks.js';

function Nav(props) {
    return (
        <nav>
            <BusinessCard
                imgurl={props.imgurl}
                name={props.name}
                bioquote={props.bioquote}
                className="name-card"
            />
            
            <NavLinks />

            <div className="socials">
                <a href="https://linkedin.com/in/kekevinchen"><i className="fab fa-linkedin" /></a>
                <a href="https://github.com/kekevi/"><i className="fab fa-github" /></a>
                <a href="https://instagram.com/kev.qen/"><i className="fab fa-instagram" /></a>
            </div>

        </nav>
    );
}

export default Nav;