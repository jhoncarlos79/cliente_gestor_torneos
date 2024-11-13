import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const deportesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apideportes/'
})

// Anadir token a la peticiones
/*
deportesApi.interceptors.request.use(config=>{
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && config.method !== 'GET') {
        config.headers['Authorization']=`Bearer ${token}`;
    }
    return config;
}, error=>{
    return Promise.reject(error);
});
*/

deportesApi.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },    
    (error)=>{
        return Promise.reject(error);
    }
)

// Al añadir la constante ya no es necesario el return por que se puede hacer una sola linea

export const getAllDeporte = () => deportesApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getDeporte = (id) => deportesApi.get('/' + id + '/')

export const createDeporte = (deporte) => deportesApi.post('/', deporte)

export const deleteDeporte = (id) => deportesApi.delete('/' + id + '/')

export const updateDeporte = (id, deporte) => deportesApi.put('/' + id + '/', deporte)