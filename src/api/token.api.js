import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

export const tokenApi = axios.create({
	baseURL: 'http://127.0.0.1:8000/apiauth/'
})

tokenApi.interceptors.request.use(
	(config) => {
	    const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
	        config.headers.Autorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
	    return Promise.reject(error);
    }
)
