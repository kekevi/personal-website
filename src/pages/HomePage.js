import React from 'react';
import './HomePage.css';
import myPicture from './../resources/bioblurbprofile.png';

export default HomePage;

function HomePage(props) {
    return (
        <article className="homepage">
            <section className="blurb">
                <div className="biotext">
                    <h1>Hello, I'm Kevin.</h1>
                    <p>
                        I'm a student at UNC Chapel Hill studying CS. I'm also interested in Stats, Linguistics, Physics, and more. 
                        This website showcases my works and my ideas.
                    </p>
                </div>
                <img alt="Me doing something somewhere." src={myPicture}></img> {/* TODO: fill the alt text and image */}
            </section>
        </article>
    );
}