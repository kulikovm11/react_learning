

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;
    return (
        <div style={{borderBottom:'2px dashed green'}}>
            <p>Post ID: {postId}</p>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{body}</p>

        </div>
    );
};

export {Comment};