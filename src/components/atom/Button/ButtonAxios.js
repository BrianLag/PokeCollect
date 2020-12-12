import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Button.css';

const Button = ({ classNameString }) => {

    const [dataSpecies ,setDataSpecies ] = useState();

    const pokeSpecies = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon-species/')
      .then((response) => response.data )
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
    }
  
  
    useEffect(() =>{
     pokeSpecies() 
    })
  
    const poketest = () => { console.log('hello poketest') }
  
    
    return (
        <div>
            <button onClick={() => console.log('test')} className={classNameString}>
                click here
            </button>
        </div>
    )
}

export default Button;
