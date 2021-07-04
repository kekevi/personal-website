import React from 'react';
import './BusinessCard.css';

function BusinessCard(props) {

    return (
        <div className={`business-card ${props.className}`}>
            <img src={props.imgurl} alt="profile"></img> {/* should be rounded */}
            <div className="description">
                <h1>{props.name}</h1>
                <p>{props.bioquote}</p>
            </div>
            <div className="spacer"></div> {/* Looks weird if doesn't exist bc of picture */}
        </div>
    );
}

export default BusinessCard;
