import {useEffect, useState} from "react";

import {postsService} from "../../services/postsService";


const CommentsDetails = ({postId}) => {



    const [post, setPost] = useState(null)



    useEffect(()=>{
        postsService.getPostByID(postId).then(({data})=>setPost(data))
    },[postId])


    return (
        <div>

            {post &&
                <>
                    <p>User ID: {post.userId}</p>
                    <p>ID: {post.id}</p>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            }


        </div>
    );
};

export {CommentsDetails};