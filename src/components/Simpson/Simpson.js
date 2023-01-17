import React from 'react';
import './SimpsonStyle.css'

const Simpson = ({simpson}) => {
    const {name, surname, image} = simpson
    return (
        <div className='simpson_card'>
            <h2>{name} {surname}</h2>
            <img className="simpsonsImg" src={image} alt={name}/>

        </div>
    );
};

export {Simpson};