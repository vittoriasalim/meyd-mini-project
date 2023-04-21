import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'https://meydit-project.herokuapp.com/api/'

})