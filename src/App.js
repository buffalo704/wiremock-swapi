import React from 'react';
import Routers from "./Routers";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="App-logo" alt="logo" />
        </header>
        <Routers/>
    </div>
  );
}

export default App;
