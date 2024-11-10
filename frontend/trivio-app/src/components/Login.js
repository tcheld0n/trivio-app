// src/components/Login.js

import React, { useState } from 'react';
import { login, register } from '../services/authService';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await login(username, password);
        if (response.message === "Logged in successfully") {
            onLogin(response.user_id);
        } else {
            alert("Login failed");
        }
    };

    const handleRegister = async () => {
        const response = await register(username, password);
        alert(response.message);
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Login;
