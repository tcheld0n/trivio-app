// src/services/scoreService.js

const API_URL = 'http://127.0.0.1:5003';

export const submitScore = async (userId, score) => {
    const response = await fetch(`${API_URL}/score`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId, score }),
    });
    return response.json();
};

export const getLeaderboard = async () => {
    const response = await fetch(`${API_URL}/leaderboard`);
    return response.json();
};
