import React from 'react';
import './App.css';
import Button from './components/atom/Button/Button';
import Logo from './images/PokemonLogo.png'

function App() {
  return (
    <div className="page">
      <img src={Logo} alt="logo" />
      <Button/>
    </div>
  );
}

export default App;
