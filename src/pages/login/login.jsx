import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

import { sendLoginRequest } from '../../services/auth_requests';
import ErrorMessage from '../../components/ErrorMessage';

const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError('');

        sendLoginRequest(login, password)
            .then(() => {
                // Вызываем функцию onLogin для установки состояния входа
                onLogin();
                // Перенаправляем пользователя на главную страницу
                navigate('/');
            })
            .catch((err) => {
                // Обрабатываем ошибку входа
                setLoginError(err.message);
            });
    };

    return (
        <div className="app-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input type="submit" value="Login" />
                </form>
                <ErrorMessage error={loginError} />
            </div>
        </div>
    );
};

export default LoginForm;
