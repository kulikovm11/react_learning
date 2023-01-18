import React from 'react';
import {Simpsons} from "./components/Simpsons/Simpsons";
import './App.css'
import {Characters} from "./components/Characters/Characters";


const App = () => {
    return (
        <div className='App'>

                <Simpsons/>

                <Characters/>

        </div>
    );
};

export {App};