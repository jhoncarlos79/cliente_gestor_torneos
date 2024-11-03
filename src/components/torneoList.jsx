import { useEffect, useState } from "react";
import { getAllTorneo } from "../api/torneo.api";
import Table from 'react-bootstrap/Table';

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
            <Table striped>
            <thead>
                <tr>                
                <th>NOMBRE</th>
                <th>FECHA DE INICIO</th>
                <th>FECHA DE FIN</th>
                <th>DEPORTE</th>                
                </tr>
            </thead>
            <tbody>
            {
                torneos.map(torneos => (
                    <tr key={torneos.id_torneo}>                        
                        <td>{torneos.nombre}</td>
                        <td>{torneos.fecha_inicio}</td>
                        <td>{torneos.fecha_fin}</td>
                        <td>{torneos.id_deporte}</td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}