import React from 'react';
import './Button'

const Button = ({classNameString}) => {
    return (
        <div>
            <button  className={classNameString} onClick={() => console.log('hello Pikachu')} />
        </div>
    )
}

export default Button;
