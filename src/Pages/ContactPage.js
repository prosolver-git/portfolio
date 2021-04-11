import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2328.559370568082!2d76.99736985732298!3d11.027036008197635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8583ab1b90117%3A0x14f02f482ba4ffc3!2sPerumal%20Kovil!5e0!3m2!1sen!2sin!4v1617094174040!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 99949 55796'} title={'Phone'} />
                    <ContactItem icon={email} text1={'17pt36@psgtech.ac.in'} text2={'tharanitaranmit@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'43,44 Mariamman Koil Street, Peelamedu'} text2={'Coimbatore, Tamil Nadu'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
