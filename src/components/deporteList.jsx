import { useEffect, useState } from "react";
import { getAllDeporte } from "../api/deporte.api";


export function DeportesList(){
    const [deportes, setDeportes] = useState([]);
    useEffect(() => {
        async function loadDeportes() {
            const res=await getAllDeporte();
            console.log(res);
            setDeportes(res.data);
        }
        loadDeportes();
    },[]);

    return (
        <div>
            {
                deportes.map(deportes => (
                    <div key={deportes.id_deporte}>
                        <h1>{deportes.nombre}</h1>
                        <p>{deportes.num_jugadores}</p>
                    </div>
                    )
                )
            }
        </div>
    )
}