import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

const inscripcionesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apiinscripciones/'
})

// Anadir token a la peticiones

inscripcionesApi.interceptors.request.use(config=>{
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && config.method !== 'GET') {
        config.headers['Authorization']=`Bearer ${token}`;
    }
    return config;
}, error=>{
    return Promise.reject(error);
});

export const getAllInscripcione = () => inscripcionesApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getInscripcione = (id) => inscripcionesApi.get('/' + id + '/')

export const createInscripcione = (inscripcione) => inscripcionesApi.post('/', inscripcione)

export const deleteInscripcione = (id) => inscripcionesApi.delete('/' + id + '/')

export const updateInscripcione = (id, inscripcione) => inscripcionesApi.put('/' + id + '/', inscripcione)