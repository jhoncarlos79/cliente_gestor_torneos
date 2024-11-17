import { useState, useEffect } from "react"
import { getTorneo } from "../api/torneo.api"

export function TorneoValue({id}){
    const [torneos, setTorneos] = useState([]);
    useEffect(()=>{
        async function loadTorneos() {
            try {
                const res = await getTorneo(id);
                //console.log(res);
                setTorneos(res.data);
            } catch (error) {
                console.error('Error al cargar los torneos:', error);
            }            
        }
        loadTorneos();
    },[]);
    
    return torneos.nombre;
}