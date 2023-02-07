import {postActions, userActions} from "../../redux";
import {useDispatch} from "react-redux";


const Post = ({post}) => {

    const dispatch = useDispatch()

    const {id, title, body} = post;

    return (
        <div>

            <p>ID: {id}</p>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={()=>dispatch(postActions.setSelectedPost(post))}>Selected</button>

        </div>
    );
};

export {Post};