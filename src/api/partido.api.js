import axios from 'axios';

export const getAllPartido = () =>{
    return axios.get('http://127.0.0.1:8000/apipartidos/') // Aqui coloco la ruta del backend que vamos a usar
} 