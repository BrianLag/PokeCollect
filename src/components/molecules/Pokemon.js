import React from 'react';
import { useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';



export default function Pokemon() {
  let { id } = useParams()


  const PokeGQL = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemonspeciesname(where: {language_id: {_eq: 5}, pokemon_species_id: {_eq: ${id}}}) {
      id
      name
    }
  }
  `
  const { loading, error, data } = useQuery(PokeGQL)
  console.log('pokemon name : ' + data);
  // const name = data.pokemon_v2_pokemonspeciesname.map(({ name }) => (name));

  if (loading) return <p>Loading Launches</p>;
  if (error) return <p>Error in fetching :(</p>;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <img style={{ width: '15rem' }} className="pokeImage" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokeImage" />
    </div>
  )
}
