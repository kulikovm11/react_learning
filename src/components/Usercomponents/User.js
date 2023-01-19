import React, {useState} from 'react';
import './UsersStyle.css'


const User = ({user}) => {
    const {id,name,username,email,phone} = user;
    const [details, setDetails]=useState(false)

    return (
        <div className="user-card">
            <p>{id}</p>
            <h2>{name}</h2>
            <button className="details"
            onClick={()=> setDetails(prevState => !prevState)}>{details? 'Hide details':'Show details'}</button>
            {details && <div>
                <p>Username:{username}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
            </div>}

        </div>
    );
};

export {User};