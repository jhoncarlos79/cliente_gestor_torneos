import axios from 'axios';

export const getAllTorneo = () =>{
    return axios.get('http://127.0.0.1:8000/apitorneos/') // Aqui coloco la ruta del backend que vamos a usar
} 