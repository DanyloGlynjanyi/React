import {axiosServices} from "./apiServices";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => axiosServices.get(urls.comments)
}
export {
    commentService
}