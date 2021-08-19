import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  //grab initial value from localStorage or 0 if null -- convert to number bc localStorage is string
  const initialCount = Number(window.localStorage.getItem('count')) || 0

  const [ count, setCount ] = useState(initialCount)

  const clickCounter = () => setCount(count+1)

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  return (
    <div className="App">
      <button onClick={clickCounter}>Clicked {count} times</button>
    </div>
  );
}

export default App;