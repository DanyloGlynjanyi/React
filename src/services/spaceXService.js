import axios from "axios";
import {baseUrlSpaceX} from "../constans/urls";

const spaceXService = axios.create({baseURL: baseUrlSpaceX});

export {
    spaceXService
}