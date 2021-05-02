import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const Pokelist = ({ pokeNumber }) => {
  const [dataSpecies, setDataSpecies] = useState({})

  const pokeSpecies = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
      .then((response) => response.data)
      .then((data) => setDataSpecies(data))
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    pokeSpecies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeNumber]);

  return (<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
    <div>
      <p>
        Bienvenue sur le pokédex
      </p>
    </div>
    <div>
      <h2>
        {dataSpecies.name}
      </h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNumber}.svg`} alt="pokeImage" />

      {console.log(dataSpecies)}
    </div>
  </div>
  );
}

export default Pokelist