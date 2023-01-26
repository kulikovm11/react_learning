import {CommentsDetails, Posts} from "../../components";
import {useParams} from "react-router-dom";


const CommentDetailsPage = () => {

    const{postId} = useParams()


    return (
        <div>

            <CommentsDetails postId={postId}/>

        </div>
    );
};

export {CommentDetailsPage};