import axios from "axios";
import {baseUrlJson} from "../../constans/urls";

const jsonServices = axios.create({baseURL: baseUrlJson});

export {
    jsonServices
}