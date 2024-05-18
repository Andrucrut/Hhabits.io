import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь предполагается, что это предопределенный пользователь
        const predefinedUser = {
            email: "user@example.com",
            password: "1234"
        };

        if (email === predefinedUser.email && password === predefinedUser.password) {
            navigate("/");
        } else {

            setError("Invalid email or password");
        }
    };

    return (
        <div className="app-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <input type="submit" value="Login" />
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
