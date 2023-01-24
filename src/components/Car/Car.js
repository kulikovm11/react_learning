import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year} = car
    return (
        <div style={{borderBottom:'1px solid blue'}}>
            <p>ID: {id}</p>
            <h2>{brand}</h2>
            <p>Price: {price}</p>
            <p>Year: {year}</p>

        </div>
    );
};

export {Car};