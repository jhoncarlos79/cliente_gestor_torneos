import axios from 'axios';

export const getAllInscripcione = () =>{
    return axios.get('http://127.0.0.1:8000/apiinscripciones/') // Aqui coloco la ruta del backend que vamos a usar
} 