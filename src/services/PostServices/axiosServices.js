import axios from "axios";
import {baseUrlJson} from "../../constans/urls";

const axiosService = axios.create({baseURL: baseUrlJson});

export {
    axiosService
}