import axios from "axios";

const axiosService = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})
const axiosServiceSpaceX = axios.create({baseURL:'https://api.spacexdata.com/v4/'})

export {axiosService, axiosServiceSpaceX}