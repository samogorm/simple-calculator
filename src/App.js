import React from 'react';
import Calculator from './components/calculator/Calculator';
import logo from './assets/svg/App-Icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="App Icon" />
        <h2>Simple Calculator</h2>      
      </header>
      <div className="App-body">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
