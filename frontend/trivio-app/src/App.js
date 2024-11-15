// src/App.js

import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TriviaGame from './components/TriviaGame';

function App() {
    const [userId, setUserId] = useState(() => localStorage.getItem('userId'));

    useEffect(() => {
        console.log("userId atualizado:", userId); // Verifica se o estado está sendo alterado
        if (userId) {
            localStorage.setItem('userId', userId);
        }
    }, [userId]);

    const handleLogout = () => {
        setUserId(null);
        localStorage.removeItem('userId');
    };

    return (
        <div className="App">
            {userId ? (
                <TriviaGame userId={userId} onLogout={handleLogout} />
            ) : (
                <Login onLogin={(id) => setUserId(id)} />
            )}
        </div>
    );
}

export default App;
