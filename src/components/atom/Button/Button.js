import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ classNameString, linkTo }) => {
	return (
		<div>
			<Link to={`/${linkTo}`}>
				<button className={classNameString}>
					click here
        </button>
			</Link>
		</div>
	)
}

export default Button;
