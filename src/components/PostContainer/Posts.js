import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import {Post} from "./Post";
import css from"./Post.module.css"
const Posts = () => {
    const {state: {postId}} = useLocation();
    const [post, setPost] = useState(null);


    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div className={css.Post}>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};