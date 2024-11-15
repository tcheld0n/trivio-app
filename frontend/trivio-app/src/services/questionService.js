// src/services/questionService.js

const API_URL = 'http://127.0.0.1:5002';

export const getQuestions = async (difficulty = 'easy') => {
    const response = await fetch(`${'https://opentdb.com/api.php?amount=10'}/questions?difficulty=${difficulty}`);
    return response.json();
};
