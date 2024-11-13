import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const jugadoresApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apijugadores/'
})

// Anadir token a la peticiones

jugadoresApi.interceptors.request.use(
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

export const getAllJugadore = () => jugadoresApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getJugadore = (id) => jugadoresApi.get('/' + id + '/')

export const createJugadore = (jugadore) => jugadoresApi.post('/', jugadore)

export const deleteJugadore = (id) => jugadoresApi.delete('/' + id + '/')

export const updateJugadore = (id, jugadore) => jugadoresApi.put('/' + id + '/', jugadore)