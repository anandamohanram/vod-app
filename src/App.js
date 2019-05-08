import React from 'react';
import './App.css';
import Routes from './router/routes';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
    <Header />
    <Routes />
    </div>
  );
}

export default App;
