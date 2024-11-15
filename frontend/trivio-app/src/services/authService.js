// src/services/authService.js

const API_URL = 'http://127.0.0.1:5001';

export const register = async (username, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

export const validateSession = async () => {
    const response = await fetch(`${API_URL}/session`, {
        method: 'GET',
        credentials: 'include',  // Inclui cookies para validação de sessão
    });
    return response.json();
};
