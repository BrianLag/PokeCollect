import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ classNameString, goal }) => {
	return (
		<div>
			<Link to={`/${goal}`}>
				<button className={classNameString}>
					click here
        </button>
			</Link>
		</div>
	)
}

export default Button;
