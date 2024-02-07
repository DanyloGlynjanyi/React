import {spaceXService} from "./spaceXService";
import {urls} from "../constans/urls";

const axiosService = {
    getAll: () => spaceXService.get(urls.launches)
};

export {
    axiosService
};
