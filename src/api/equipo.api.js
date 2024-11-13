import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const equiposApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apiequipos/'
})

// Anadir token a la peticiones

equiposApi.interceptors.request.use(
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

export const getAllEquipo = () => equiposApi.get('/') // Aqui coloco la ruta del backend que vamos a usar

export const getEquipo = (id) => equiposApi.get('/' + id + '/')

export const createEquipo = (equipo) => equiposApi.post('/', equipo)

export const deleteEquipo = (id) => equiposApi.delete('/' + id + '/')

export const updateEquipo = (id, equipo) => equiposApi.put('/' + id + '/', equipo)