import React from 'react';
import ContactForm from '../ContactForm'
Contact.propTypes = {
    
};

function Contact(props) {
    const handleSubmit = (values)=>{
        console.log('Form:', values)
    }
    return (
        <div>
            <ContactForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Contact;