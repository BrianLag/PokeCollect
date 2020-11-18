import React from 'react';
import './Button.css'

const Button = ({ classNameString }) => {
    return (
        <div>
            <button onClick={() => console.log('test')} className={classNameString}>
                click here
            </button>
        </div>
    )
}

export default Button;
