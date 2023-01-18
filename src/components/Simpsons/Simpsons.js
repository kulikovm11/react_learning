import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/Homer_Simpson.png'
        },
        {
            id:2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png'
        },
        {
            id:3,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            id:4,
            name: 'Lisa',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            id:5,
            name: 'Meggie',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
        {
            id:6,
            name: 'Abe',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a9/Abraham_Simpson.png/100px-Abraham_Simpson.png'
        },
    ]
    return (
        <div className="simpsons_place">
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }

        </div>
    );
};

export {Simpsons};