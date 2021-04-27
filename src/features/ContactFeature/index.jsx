import React from 'react';
import Contact from '../Auth/components/Contact';
import './style.scss';
ContactFeature.propTypes = {
    
};

function ContactFeature(props) {
    return (
        <div className='Contact__title'>
            <h3>Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>    
            <Contact/>
        </div>
    );
}

export default ContactFeature;