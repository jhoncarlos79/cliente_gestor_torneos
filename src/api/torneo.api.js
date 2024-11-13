import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const torneosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apitorneos/'
})

torneosApi.interceptors.request.use(
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

export const getAllTorneo = () => torneosApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getTorneo = (id) => torneosApi.get('/' + id + '/')

export const createTorneo = (torneo) => torneosApi.post('/', torneo)

export const deleteTorneo = (id) => torneosApi.delete('/' + id + '/')

export const updateTorneo = (id, torneo) => torneosApi.put('/' + id + '/', torneo)