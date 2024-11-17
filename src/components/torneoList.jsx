import { useEffect, useState } from "react";
import { getAllTorneo } from "../api/torneo.api";
import { useNavigate } from "react-router-dom";
import { DeporteValue } from "../components/deporteValue"
import Table from 'react-bootstrap/Table';

export function TorneosList(){
    const [torneos, setTorneos] = useState([]);
    useEffect(() => {
        async function loadTorneos() {
            const res=await getAllTorneo();
            //console.log(res);
            setTorneos(res.data);
        }
        loadTorneos();
    },[]);

    const navigate=useNavigate();

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
                        <td><a href=""
                        // Para poder eliminar o hacer una accion sobre un deporte se arma la ruta con el id_deporte
                            onClick={()=>{
                                navigate('/torneos-add/' + torneos.id_torneo)
                            }}
                        >{torneos.nombre}</a></td>
                        <td>{torneos.fecha_inicio}</td>
                        <td>{torneos.fecha_fin}</td>
                        <td><DeporteValue id={torneos.id_deporte}/></td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}