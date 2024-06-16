import React, { useState } from 'react';
import "./reg.css";
import {useNavigate} from "react-router-dom";
import {sendRegisterRequest} from "../../services/auth_requests";
import ErrorMessage from "../../components/ErrorMessage";
import {store} from "../../redux/store";

const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');

    store.subscribe(() => {
        if (store.getState().loggeIn) {
            navigate("/home")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError('');
        sendRegisterRequest(login, password).then(() => navigate("/main"), err => setLoginError(err.message));
    };

    return (
        <div className="app-container">
            <div className="registration-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={login} onChange={(e) => setLogin(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                    <input type="submit" value="Register" />
                </form>
                <ErrorMessage error={loginError}/>
            </div>
        </div>
    );
};

export default RegistrationForm;
