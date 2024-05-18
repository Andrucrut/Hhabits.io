import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log('User logged in:', response.data);
            setError('');
            // Сохраните токен в локальном хранилище или в состоянии
            localStorage.setItem('token', response.data.token);
            // Перенаправить пользователя на домашнюю страницу или другую страницу
            navigate('/');
        } catch (err) {
            setError(err.response.data.message || 'An error occurred');
        }
    };

    return (
        <div className="app-container">
            <div className="login-form">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
