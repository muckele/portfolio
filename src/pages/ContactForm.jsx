import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../assets/css/ContactForm.css'

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

        emailjs
            .sendForm('service_pq7c2xb', 'template_l13a75f', form.current, {
                publicKey: 'epJH6ufdeZmO5zO78',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <h1>Contact</h1>
            <p>Feel free to reach out for collaboration on exciting projects or coding discussions via social media or the provided form.</p>
            <section className="contact-form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}

export default ContactForm 