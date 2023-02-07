import {useDispatch} from "react-redux";

import {userActions} from "../../redux";


const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch()

    return (
        <div style={{borderBottom:'2px dashed cornflowerblue'}}>

            <p>ID: {id}</p>
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))}>Selected</button>

        </div>
    );
};

export {User};