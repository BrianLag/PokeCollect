import React from 'react';
import Button from '../atom/Button/Button';
import Logo from '../../images/PokemonLogo.png';

export default function Home(props) {


	return (
		<div className="page">
			<img src={Logo} alt="logo" />
			<Button goal="about" />
		</div>
	)
}
