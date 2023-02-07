import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";
import {postsService} from "../../services/postsService";


const Posts = () => {

    const dispatch = useDispatch()

    const{posts, errors, loading} = useSelector(state => state.posts)

    useEffect(()=>{
       // postsService.getAll().then(({data})=>dispatch(postActions.getAllPosts(data)))
        dispatch(postActions.getAllPosts())
    },[])



    return (
        <div>

            {errors && 'Something went wrong'}

            {loading && <h1>Loading.....</h1>}


            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};