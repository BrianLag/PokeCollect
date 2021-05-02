import React, { useState } from 'react'
import Bannière from '../../images/151Pokemons.jpg'
import Pokelist from './Pokelist'
import Pokeball from '../../images/pokeball.png'
import { Pokedex } from './Pokedex';
import './Pokedex.css'

export default function Landscreen(props) {
    const [valeur, setValeur] = useState('');
    const [pokeChoice, setPokechoice] = useState('');
    const [showPokemon, setShowPokemon] = useState(false);

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={Bannière} alt="Bannière" style={{ width: '100%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='wrapper' >
                    <Pokedex />
                </div>
            </div>
            <div style={{ flexDirection: 'row' }}>
                <label>
                    Recherche ton Pokémon
                </label>
                <br />
                <input type="text" name="name" onChange={(e) => setValeur(e.target.value)} />

                <button onClick={() => { setShowPokemon(true); setPokechoice(valeur) }} >
                    <img src={Pokeball} style={{ width: 25, height: 25 }} alt="pokeball" />
                </button>
            </div>
            {showPokemon === true ? <Pokelist pokeNumber={pokeChoice} /> : <p> aucun pokemon sélectionné</p>}
        </ div>
    )
}
