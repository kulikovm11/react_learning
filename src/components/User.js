

const User = ({user}) => {
    const {name, username, email, address:{street, suite}} = user
    return (
        <div style={{borderBottom:'2px dashed cornflowerblue'}}>
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p>Mail: {email}</p>
            <p>Street: {street} {suite}</p>

        </div>
    );
};

export {User};