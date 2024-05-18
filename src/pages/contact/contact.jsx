import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { RiTelegramFill } from 'react-icons/ri';
import { SiVk } from 'react-icons/si';
import "./contact.css";

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h2>Contact Us</h2>
            <div className="contact-form">
                <div className="contact-info">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Your phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" placeholder="Your message" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="send-btn">Send</button>
                    </div>
                </div>
                <div className="social-icons">
                    <h3>Follow Us:</h3>
                    <div className="icon-list">
                        <a href="https://instagram.com"><FaInstagram /></a>
                        <a href="https://t.me"><RiTelegramFill /></a>
                        <a href="https://vk.com"><SiVk /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
