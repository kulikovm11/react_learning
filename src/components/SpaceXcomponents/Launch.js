import React from 'react';

const Launch = ({launch}) => {
    const{name,date_utc,links:{patch:{small}}} = launch


    if(date_utc !== '2020'){

        return (
            <div className='spaceX_card'>
                <h2>{name}</h2>
                <p>Date: {date_utc}</p>
                <img src={small} alt={name}/>


            </div>
        );

    }

};

export {Launch};