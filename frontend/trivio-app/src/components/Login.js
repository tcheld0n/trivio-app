import React, { useState } from 'react';
import { login, register } from '../services/authService';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await login(username, password);
        console.log("Resposta do backend:", response); // Exibe a resposta completa
        if (response.message === "Logged in successfully") {
            console.log("Chamando onLogin com user_id:", response.user_id); // Verifica o valor de user_id
            onLogin(response.user_id); // Define o userId no App.js
        } else {
            alert("Login failed");
        }
    };    

    const handleRegister = async () => {
        const response = await register(username, password);
        alert(response.message);
    };

    return (
        <div className="login-container">
            <div className="login-image-section">
                <img src="https://via.placeholder.com/300" alt="Decorative" className="login-image" />
            </div>
            <div className="login-form-section">
                <h2>Sign in</h2>
                <p>Don't have an account? <a href="#signup" onClick={handleRegister}>Sign up</a></p>
                
                <div className="social-login form-element">
                    <button className="social-button google">Sign in with Google</button>
                    <button className="social-button apple">Sign in with Apple ID</button>
                </div>
                
                <div className="divider form-element">
                    <span>Or continue with username</span>
                </div>
                
                <div className="input-group form-element">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="input-group form-element">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                
                <button className="submit-button form-element" onClick={handleLogin}>Start playing</button>
            </div>
        </div>
    );
};

export default Login;
