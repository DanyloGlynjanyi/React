import {urls} from "../../constans/urls";
import {jsonServices} from "./jsonServices";

const postServices = {
    getAll: () => jsonServices.get(urls.posts.base),
    getById: (id) => jsonServices.get(urls.posts.byId(id))
};

export {postServices, jsonServices};
