

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div style={{borderBottom:'2px solid cornflowerblue'}}>

            <p>User ID: {userId}</p>
            <p>ID: {id}</p>
            <h3>{title}</h3>

        </div>
    );
};

export {Album};