// src/components/TriviaGame.js

import React, { useState, useEffect } from 'react';
import { getQuestions } from '../services/questionService';
import { submitScore } from '../services/scoreService';

const TriviaGame = ({ userId }) => {
    // Estado para armazenar perguntas, a pergunta atual, a pontuação, o tempo restante e o status de carregamento
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        console.log("TriviaGame carregado com userId:", userId);
    }, []);

    // Função para buscar perguntas
    const fetchQuestions = async () => {
        try {
            // Usa `getQuestions` para fazer a requisição ao backend local
            const questions = await getQuestions('easy'); // Padrão para 'easy', mas pode ser alterado
            setQuestions(questions); // Define as perguntas no estado
            setIsLoading(false); // Para o estado de carregamento
        } catch (error) {
            console.error("Erro ao buscar perguntas:", error);
            setIsLoading(false);
        }
    };

    // useEffect para buscar perguntas quando o componente monta
    useEffect(() => {
        fetchQuestions();
    }, []);

    // useEffect para gerenciar o temporizador de cada pergunta
    useEffect(() => {
        if (timeLeft === 0) {
            handleAnswer(false); // Conta como resposta incorreta se o tempo acabar
        }

        // Decrementa o temporizador a cada segundo
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Limpa o intervalo ao trocar de pergunta
    }, [timeLeft, currentQuestion]);

    // Função para processar a resposta do usuário
    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 10); // Adiciona 10 pontos se a resposta estiver correta
        setCurrentQuestion(currentQuestion + 1); // Avança para a próxima pergunta
        setTimeLeft(10); // Reinicia o temporizador para a próxima pergunta
    };

    // Função para enviar a pontuação ao backend e finalizar o jogo
    const handleEndGame = async () => {
        await submitScore(userId, score); // Envia a pontuação do usuário para a API
        alert(`Game over! Your score: ${score}`); // Alerta com a pontuação final do usuário
    };

    // Função para reiniciar o jogo
    const restartGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setTimeLeft(10);
        fetchQuestions(); // Busca novamente as perguntas para reiniciar o jogo
    };

    // Exibe a mensagem de carregamento enquanto as perguntas estão sendo carregadas
    if (isLoading) {
        return <p>Loading questions...</p>;
    }

    // Exibe a tela de fim de jogo quando todas as perguntas foram respondidas
    if (currentQuestion >= questions.length) {
        return (
            <div>
                <h2>Game Over</h2>
                <p>Your final score: {score}</p>
                <button onClick={handleEndGame}>Submit Score</button>
                <button onClick={restartGame}>Play Again</button>
            </div>
        );
    }

    // Renderiza a pergunta atual e as opções de resposta
    const question = questions[currentQuestion];
    return (
        <div>
            <h2>Score: {score}</h2> {/* Exibe a pontuação atual */}
            <h4>Time left: {timeLeft}s</h4> {/* Exibe o tempo restante para a pergunta atual */}
            <h3>{question.question}</h3> {/* Exibe a pergunta atual */}
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
