import React from 'react';
import './App.css'; // Agrega estilos aquí si lo deseas
import './styles/style.css';
import TranslationForm from './TranslationForm';
import './styles/style.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Traductor Habali</h1>
            </header>
            <main>
                <TranslationForm />
            </main>
        </div>
    );
}

export default App;
        