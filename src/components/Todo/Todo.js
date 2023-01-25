

const Todo = ({todo}) => {

    const{userId, id, title, completed} = todo;




    return (
        <div style={{borderBottom:'2px solid cornflowerblue'}}>

            <p>User ID: {userId}</p>
            <p>ID: {id}</p>
            <h3>{title}</h3>
            <p>Completion: {completed}</p>

        </div>
    );
};

export {Todo};