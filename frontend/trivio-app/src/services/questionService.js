// src/services/questionService.js

const API_URL = 'http://localhost:5002';

export const getQuestions = async (difficulty = 'easy') => {
    const response = await fetch(`${API_URL}/questions?difficulty=${difficulty}`);
    return response.json();
};
