import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const Pokelist = () => {
  const [dataSpecies, setDataSpecies] = useState({})

  const pokeSpecies = () => {
    

    Axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.data)
      .then((data) => setDataSpecies(data))
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    pokeSpecies()
  }, []);

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign : 'center'}}>
      <div>
        <p>
          Bienvenue sur le pokédex
      </p>
      </div>
      <div>
        <h2>
          {dataSpecies.name}
        </h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dataSpecies.order}.svg`} alt="pokeImage" />
        
        {console.log(dataSpecies)}
      </div>
    </div>
  )
}

export default Pokelist