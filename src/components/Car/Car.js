import React from 'react';

import {carService} from "../../services";

const Car = ({car, setUpdateCar}) => {
    const {id, brand, price, year} = car
    return (
        <div style={{borderBottom:'1px solid blue'}}>
            <p>ID: {id}</p>
            <h2>{brand}</h2>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button style={{background:'green'}} onClick={()=>setUpdateCar(car)}>Update</button>
            <button style={{background:'tomato'}} onClick={()=>carService.deleteById(id)}>Delete</button>

        </div>
    );
};

export {Car};