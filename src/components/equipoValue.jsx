import { useState, useEffect } from "react"
import { getEquipo } from "../api/equipo.api"

export function EquipoValue({id}){
    const [equipos, setEquipos] = useState([]);
    useEffect(()=>{
        async function loadEquipos() {
            try {
                const res = await getEquipo(id);
                console.log(res);
                setEquipos(res.data);
            } catch (error) {
                console.error('Error al cargar los equipos:', error);
            }            
        }
        loadEquipos();
    },[]);
    
    return equipos.nombre;
}