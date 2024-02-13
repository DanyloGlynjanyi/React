import {Outlet} from "react-router-dom";

import {Comments} from "../components/CommentContainer/Comments";

const CommentsPages = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};


export {CommentsPages};