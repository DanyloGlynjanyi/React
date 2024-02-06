import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {PostDetails} from "../PostDetails/PostDetails";
import {postServices} from "../../../services/PostServices/postServices";
import css from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostsDetails] = useState(null)

    const getPostId = async (id) => {
        const {data} = await postServices.getById(id);
        setPostsDetails(data)
    }
    useEffect(() => {
        postServices.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div className={css.Posts}>
            <div>
                {postDetails && <PostDetails postDetails={postDetails}/>}
            </div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)}
            </div>
        </div>
    );
};

export {Posts};