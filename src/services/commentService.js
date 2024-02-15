import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commentService = {
    getByPostId: (postId) => apiService.get(urls.comments, {params: {postId}})
}

export {
    commentService
}