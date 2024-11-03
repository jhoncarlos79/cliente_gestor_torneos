import axios from 'axios';

export const getAllJugadore = () =>{
    return axios.get('http://127.0.0.1:8000/apijugadores/') // Aqui coloco la ruta del backend que vamos a usar
} 