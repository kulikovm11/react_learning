import {Link} from "react-router-dom";


const Comment = ({comment}) => {

    const{postId, id, name, email, body}=comment;



    return (
        <div style={{borderBottom:'2px solid cornflowerblue'}}>
            <p>Post ID: {postId}</p>
            <p>ID: {id}</p>
            <h3>{name}</h3>
            <p>Mail: {email}</p>
            <p>{body}</p>
            <Link to={postId.toString()}>Current post</Link>

        </div>
    );
};

export {Comment};