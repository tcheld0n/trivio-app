// src/components/TriviaGame.js

import React, { useState, useEffect } from 'react';
import { getQuestions } from '../services/questionService';
import { submitScore } from '../services/scoreService';

const TriviaGame = ({ userId }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            const questions = await getQuestions('easy');
            setQuestions(questions);
        };
        fetchQuestions();
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 10);
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleEndGame = async () => {
        await submitScore(userId, score);
        alert(`Game over! Your score: ${score}`);
    };

    if (currentQuestion >= questions.length) {
        return <button onClick={handleEndGame}>End Game</button>;
    }

    const question = questions[currentQuestion];
    return (
        <div>
            <h2>Score: {score}</h2>
            <h3>{question.question}</h3>
            {question.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleAnswer(option === question.answer)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default TriviaGame;
