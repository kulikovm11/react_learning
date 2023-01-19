import React from 'react';
import {Users} from "./components/Usercomponents/Users";
import {Launchers} from "./components/SpaceXcomponents/Launchers";


const App = () => {
    return (
        <div>
            <div className='jsonplaceholder'>
                <Users/>
            </div>
            <div className='spaceX'>
                <Launchers/>

            </div>



        </div>
    );
};

export {App};