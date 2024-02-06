import {urls} from "../../constans/urls";
import {axiosService} from "./axiosServices";

const postServices = {
    getAll: () => axiosService.get(urls.posts.base),
    getById: (id) => axiosService.get(urls.posts.byId(id))
};

export {postServices, axiosService};
