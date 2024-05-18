import React, { useState } from 'react';
import "./reg.css";

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="app-container">
            <div className="registration-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="User name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
