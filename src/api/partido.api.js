import axios from 'axios';

const partidosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apipartidos/'
})

export const getAllPartido = () => partidosApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getPartido = (id) => partidosApi.get('/' + id + '/')

export const createPartido = (partido) => partidosApi.post('/', partido)

export const deletePartido = (id) => partidosApi.delete('/' + id + '/')

export const updatePartido = (id, partido) => partidosApi.put('/' + id + '/', partido)