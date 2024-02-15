import {Comments} from "../CommentsContainer/Comments";
import {useNavigate} from "react-router-dom";

const PostsDetails = ({post}) => {
    const {id, userId, title, body} = post;

    const navigate = useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={() => navigate(-2)}>Go Back</button>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export {PostsDetails};