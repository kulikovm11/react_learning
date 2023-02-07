import {useSelector} from "react-redux";


const Header = () => {

    // const {selectedUser} = useSelector(state => state.users)
    const {selectedPost} = useSelector(state => state.posts)


    return (
        <div>
            {selectedPost && selectedPost.title}

            {/*{selectedUser && selectedUser.name}*/}

        </div>
    );
};

export {Header};