import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    console.log(post)
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <button onClick={() => navigate(`${id}`)}>Post Details</button>
            </div>
        </div>
    );
};

export {Post};