import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";


const carService = {
    getAll: () => axiosService.get(urls.cars.base),
    create: (data) => axiosService.post(urls.cars.base, data),
    updateByid: (id, data) => axiosService.put(urls.cars.byId(id), data),
    deleteByid: (id) => axiosService.delete(urls.cars.byId(id))

}
export {
    carService
}