import React, { useState } from 'react'
import Bannière from '../../images/151Pokemons.jpg'
import Pokelist from './Pokelist'

export default function Landscreen(props) {
    const [ valeur, setValeur ] = useState('')
    const [ showPokemon, setShowPokemon ] = useState(false)

    const pokeReturn = () => (
        <Pokelist pokeNumber={valeur} />
    )
 
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={Bannière} alt="Bannière" style={{ width: '100%' }} />
                <label>
                    Recherche ton Pokémon
                    <input type="text" name="name" onChange={(e) => setValeur(e.target.value)} />
                </label>
                <button onClick={() => setShowPokemon(true)} />
            {showPokemon === true ? <Pokelist pokeNumber={valeur}/> : <p> recommence</p> }
        </ div>
    )
}
