import React, {useEffect, useState} from 'react';
import {User} from "./User";

import {userServise} from "../../services/userServise";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
       userServise.getAll().then(value => value.data).then(value => setUsers([...value]))
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