import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const partidosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apipartidos/'
})

partidosApi.interceptors.request.use(
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

export const getAllPartido = () => partidosApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getPartido = (id) => partidosApi.get('/' + id + '/')

export const createPartido = (partido) => partidosApi.post('/', partido)

export const deletePartido = (id) => partidosApi.delete('/' + id + '/')

export const updatePartido = (id, partido) => partidosApi.put('/' + id + '/', partido)