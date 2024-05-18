import React, { useState } from 'react';
import "./reg.css";
import axios from 'axios';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                name,
                email,
                password,
                confirmPassword
            });

            console.log('User registered:', response.data);
            setError('');
            // Redirect to login or home page, or show success message
        } catch (err) {
            setError(err.response.data.message || 'An error occurred');
        }
    };

    return (
        <div className="app-container">
            <div className="registration-form">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
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
