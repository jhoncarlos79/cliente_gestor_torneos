import axios from 'axios';

const jugadoresApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/apijugadores/'
})

export const getAllJugadore = () => jugadoresApi.get('/')// Aqui coloco la ruta del backend que vamos a usar

export const getJugadore = (id) => jugadoresApi.get('/' + id + '/')

export const createJugadore = (jugadore) => jugadoresApi.post('/', jugadore)

export const deleteJugadore = (id) => jugadoresApi.delete('/' + id + '/')

export const updateJugadore = (id, jugadore) => jugadoresApi.put('/' + id + '/', jugadore)