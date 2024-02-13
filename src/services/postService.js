import {axiosServices} from "./apiServices";

import {urls} from "../constants/urls";

const postService = {
    getById: (id) => axiosServices.get(urls.posts.byId(id))
}

export {
    postService
}