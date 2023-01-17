import React from 'react';
import {Simpsons} from "./components/Simpsons/Simpsons";
import './App.css'


const App = () => {
    return (
        <div className='App'>
            <div className="simpsons">
                <Simpsons/>
            </div>
            <div className="rick_and_morty">

            </div>



        </div>
    );
};

export {App};