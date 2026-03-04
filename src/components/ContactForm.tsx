import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle form submission
    };

    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <label htmlFor="message">Message</label>
                <textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
