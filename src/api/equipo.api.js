import axios from 'axios';

const equiposApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apiequipos/'
})


export const getAllEquipo = () => equiposApi.get('/') // Aqui coloco la ruta del backend que vamos a usar

export const getEquipo = (id) => equiposApi.get('/' + id + '/')

export const createEquipo = (equipo) => equiposApi.post('/', equipo)

export const deleteEquipo = (id) => equiposApi.delete('/' + id + '/')

export const updateEquipo = (id, equipo) => equiposApi.put('/' + id + '/', equipo)