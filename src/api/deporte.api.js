import axios from 'axios';

const deportesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apideportes/'
})

// Al añadir la constante ya no es necesario el return por que se puede hacer una sola linea

export const getAllDeporte = () => deportesApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const createDeporte = (libro) => deportesApi.post('/', libro)

export const deleteDeporte = (id) => deportesApi.delete('/' + id + '/')