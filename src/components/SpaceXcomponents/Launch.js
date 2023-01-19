import React from 'react';

const Launch = ({launch}) => {
    const{mission_name,launch_year,links:{mission_patch_small}} = launch




        return (
            <div className='spaceX_card'>
                <h2>{mission_name}</h2>
                <p>Date: {launch_year}</p>
                <img src={mission_patch_small} alt={mission_name}/>


            </div>
        );



};

export {Launch};