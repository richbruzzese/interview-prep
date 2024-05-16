import React, { useEffect, useState } from 'react';
import './App.css';
import WordList from './WordList';

function App() {
  const [word, setWord] = useState('')
  useEffect(() => {
    const randWord = WordList[Math.floor(Math.random() * WordList.length)];
    setWord(randWord)
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
       Hello World
      <h3> Random wsssord is {word} </h3>
      </header>
    </div>
  );
}

export default App;
