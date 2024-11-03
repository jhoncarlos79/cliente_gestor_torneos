import { useEffect, useState } from "react";
import { getAllDeporte } from "../api/deporte.api";
import Table from 'react-bootstrap/Table';

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
            <Table striped>
            <thead>
                <tr>                
                <th>NOMBRE</th>
                <th>NUMERO DE JUGADORES</th>
                </tr>
            </thead>
            <tbody>
            {
                deportes.map(deportes => (
                    <tr key={deportes.id_deporte}>                        
                        <td>{deportes.nombre}</td>
                        <td>{deportes.num_jugadores}</td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}