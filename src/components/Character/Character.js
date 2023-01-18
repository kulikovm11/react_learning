import React from 'react';
import './CardStyle.css'

const Character = ({person}) => {
    let {id, name, status, species, gender, image} = person;
    return (
        <div className="person-card">
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>

        </div>
    );
};

export {Character};