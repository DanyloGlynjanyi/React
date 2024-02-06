import {spaceXService} from "./spaceXService";
import {urls} from "../constans/urls";

const launchService = {
    getAll: () => spaceXService.get(urls.launches)
};

export {
    launchService
};
