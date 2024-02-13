import {axiosServices} from "./apiServices";
import {urls} from "../constants/urls";

const albumService={
    getAll:()=>axiosServices.get(urls.albums)
}

export {
    albumService
}