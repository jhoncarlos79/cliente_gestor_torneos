import { useEffect, useState } from "react";
import { getAllTorneo } from "../api/torneo.api";


export function TorneosList(){
    const [torneos, setTorneos] = useState([]);
    useEffect(() => {
        async function loadTorneos() {
            const res=await getAllTorneo();
            console.log(res);
            setTorneos(res.data);
        }
        loadTorneos();
    },[]);

    return (
        <div>
            {
                torneos.map(torneos => (
                    <div key={torneos.id_torneo}>
                        <h1>{torneos.nombre}</h1>
                        <p>{torneos.fecha_inicio}</p>
                        <p>{torneos.fecha_fin}</p>
                        <p>{torneos.id_deporte}</p>
                    </div>
                    )
                )
            }
        </div>
    )
}