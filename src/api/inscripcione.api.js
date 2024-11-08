import axios from 'axios';

const inscripcionesApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apiinscripciones/'
})

export const getAllInscripcione = () => inscripcionesApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getInscripcione = (id) => inscripcionesApi.get('/' + id + '/')

export const createInscripcione = (inscripcione) => inscripcionesApi.post('/', inscripcione)

export const deleteInscripcione = (id) => inscripcionesApi.delete('/' + id + '/')

export const updateInscripcione = (id, inscripcione) => inscripcionesApi.put('/' + id + '/', inscripcione)