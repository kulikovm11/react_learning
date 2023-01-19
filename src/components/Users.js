import React, {useEffect, useState} from 'react';
import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).then(value => setUsers(value))
    },[])


    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }

        </div>
    );
};

export {Users};