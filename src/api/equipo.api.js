import axios from 'axios';

export const getAllEquipo = () =>{
    return axios.get('http://127.0.0.1:8000/apiequipos/') // Aqui coloco la ruta del backend que vamos a usar
} 