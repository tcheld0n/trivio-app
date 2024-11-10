// src/App.js

import React, { useState } from 'react';
import Login from './components/Login';
import TriviaGame from './components/TriviaGame';

function App() {
    const [userId, setUserId] = useState(null);

    return (
        <div className="App">
            {userId ? (
                <TriviaGame userId={userId} />
            ) : (
                <Login onLogin={(id) => setUserId(id)} />
            )}
        </div>
    );
}

export default App;
