import React, {useEffect, useState} from 'react';
import {axiosServiceSpaceX} from "../../services/axiosService";
import {Launch} from "./Launch";

const Launchers = () => {

    const [launchers, setLaunchers] = useState([])


    useEffect(()=>{
        axiosServiceSpaceX.get('launches/').then(value => value.data).then(value => setLaunchers([...value]))
    },[])






    return (
        <div>
            {
                launchers.filter(launch => launch.launch_year !== '2020').map(launch => <Launch key={launch.id} launch={launch}/>)
            }

        </div>
    );
};

export {Launchers};

