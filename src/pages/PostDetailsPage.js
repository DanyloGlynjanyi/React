import {PostsDetails} from "../components/PostContainer/PostsDetails";
import {useLoaderData} from "react-router-dom";

const PostDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <PostsDetails post={data}/>
        </div>
    );
};

export {PostDetailsPage};