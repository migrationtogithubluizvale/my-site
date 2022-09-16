import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => (
    <div className="contact   grid grid--padded">
        <h2 data-sal="slide-down" data-sal-delay="300" className="contact__title">
        Contact me or send me a suggestion
        </h2>

        <p data-sal="slide-down" data-sal-delay="300" className="contact__subtitle">
        I am always open to discussing new ideas.
        </p>

        <ContactForm />
    </div>
);

export default Contact;
