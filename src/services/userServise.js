import {axiosService} from "./axiosService";

const userServise = {
    getAll: ()=>axiosService.get('/users')
}

export {userServise}