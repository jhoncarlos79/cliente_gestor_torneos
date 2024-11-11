import { useState, useEffect } from "react"
import { getDeporte } from "../api/deporte.api"

export function DeporteValue({id}){
    const [deportes, setDeportes] = useState([]);
    useEffect(()=>{
        async function loadDeportes() {
            try {
                const res = await getDeporte(id);
                console.log(res);
                setDeportes(res.data);
            } catch (error) {
                console.error('Error al cargar los deportes:', error);
            }            
        }
        loadDeportes();
    },[]);
    
    return deportes.nombre;
}