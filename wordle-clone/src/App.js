import React, { useEffect, useState } from 'react';
import './App.css';
import WordList from './WordList';

function App() {
  const [word, setWord] = useState('')
  useEffect(() => {
    const randWord = WordList[Math.floor(Math.random() * WordList.length)];
    setWord(randWord)
  },[])
  
  // create an input that will accept a word
  // compare to the letters within the set word - ez map
  // map input - maybe set state for guess - possibly unnecessary?
  // compare index for each input against index for each randWord
  // determine if letters match
  // highlight which match and which dont (will probably start with just an x/x match)
  // x number of tries before death - another piece of state for tries - could just use a var, but setting it in state is cleaner imo
  // tries < 5 ? render app : you lose
 const checkWords = () => {
  // use this to check words
 }

  return (
    <div className="App">
      <header className="App-header">
      {/* need an input in order to accept the word
     */}
      <input></input>
       Hello World
      <h3> Random wsssord is {word} </h3>
      </header>
    </div>
  );
}

export default App;
