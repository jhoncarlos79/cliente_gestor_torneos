import axios from 'axios';

export const getAllDeporte = () =>{
    return axios.get('http://127.0.0.1:8000/apideportes/') // Aqui coloco la ruta del backend que vamos a usar
} 