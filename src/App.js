import React from 'react';
import './App.css';
import Button from './components/atom/Button/Button';
import ButtonAxios from './components/atom/Button/ButtonAxios';
import Logo from './images/PokemonLogo.png'

function App() {
  return (
    <div className="page">
      <img src={Logo} alt="logo" />
      <Button />
      <ButtonAxios classNameString="axiosButton" />
    </div>
  );
}

export default App;
