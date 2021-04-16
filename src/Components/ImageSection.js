import React from 'react';
import about from '../img/bg16.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Tharanitaran</span></h4>
                <p className="about-text">
                    A 4th year student of PSG College of Technology, Coimbatore. Currently pursuing MSc Theoretical Computer science (2017-2022).
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Phone</p>
                    </div>
                    <div className="right-section">
                        <p>: Tharanitaran NM</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English, Tamil, Kannada, Hindi, Sanskrit</p>
                        <p>: 43,43, Mariamman Koil Street, Peelamedu</p>
                        <p>: +91 99949 55796</p>
                    </div>
                </div>
                <a className="btn" href="https://drive.google.com/file/d/1XtL8KoNwKeExDNzIvj0XAiOJ2KPTWSL0/view?usp=sharing" target="_blank">Download Cv</a>
            </div>
        </div>
    )
}

export default ImageSection;
