import { useEffect, useState } from "react";
import { getAllDeporte } from "../api/deporte.api";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export function DeportesList(){
    const [deportes, setDeportes] = useState([]);
    useEffect(() => {
        async function loadDeportes() {
            const res=await getAllDeporte();
            //console.log(res);
            setDeportes(res.data);
        }
        loadDeportes();
    },[]);

    const navigate=useNavigate();

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
                        <td><a href=""
                        // Para poder eliminar o hacer una accion sobre un deporte se arma la ruta con el id_deporte
                            onClick={()=>{
                                navigate('/deportes-add/' + deportes.id_deporte)
                            }}
                        >{deportes.nombre}</a></td>
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