import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Button.css';

const ButtonAxios = ({ classNameString }) => {

    const [dataSpecies ,setDataSpecies ] = useState();

    const pokeSpecies = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon-species/1')
      .then((response) => response.data )
      .then((data) => setDataSpecies(data))
      .catch((error) => {
        console.log(error);
      });
    }
  
  
    useEffect(() =>{
     pokeSpecies() 
    }, [dataSpecies]);
  
  //  const poketest = () => { console.log('hello poketest') }
  
    
    return (
        <div>
            <button onClick={() => console.log(dataSpecies)} className={classNameString}>
                poke test
            </button>
        </div>
    )
}

export default ButtonAxios;
