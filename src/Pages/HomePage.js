import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Tharanitaran</span>
                </h1>
                <p className="h-sub-text">
                    A 4th year student of PSG College of Technology, Coimbatore
                    </p>
                <p className="h-sub-text">Currently pursuing MSc Theoretical Computer science
                </p>
                <p className="h-sub-text">
                    A Full Stack Developer and Deep Learning enthusiast
                </p>
                <div className="icons">
                    <Link to="" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
