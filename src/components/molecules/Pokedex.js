import React from 'react';
import './Pokedex.css'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const PokeGQL = gql`
    query samplePokeAPIquery {
      pokemon_v2_pokemonspeciesname(limit: 10, where: {language_id: {_eq: 5}}) {
        name
        pokemon_species_id
      }
    }
  `

export function Pokedex(props) {
  const { loading, error, data } = useQuery(PokeGQL)


  if (loading) return <p>Loading Launches</p>;
  if (error) return <p>Error in fetching :(</p>;


  return data.pokemon_v2_pokemonspeciesname.map(({ name, pokemon_species_id }) => (
    <Link to={`pokemon/${pokemon_species_id}`} >
      <div className="pokeBloc">
        <p>
          {pokemon_species_id}. {name}
        </p>
        <img className="pokeImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon_species_id}.svg`} alt="pokeImage" />
      </div>
    </Link> 
  ));
};
