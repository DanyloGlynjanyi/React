import {axiosServices} from "./apiServices";
import {urls} from "../constants/urls";

const todosService={
    getAll:()=>axiosServices.get(urls.todos)
}

export {
    todosService
}