import { useEffect, useState } from "react";
import { getAllPartido } from '../api/partido.api'
import Table from 'react-bootstrap/Table';

export function PartidoList(){
    const [partido, setPartido] = useState([]);
    useEffect(() => {
        async function loadPartido() {
            const res=await getAllPartido();
            console.log(res);
            setPartido(res.data);
        }
        loadPartido();
    },[]);

    return (
        <div>
            <Table striped>
            <thead>
                <tr>                
                <th>FECHA</th>
                <th>HORA</th>
                <th>LUGAR</th>
                <th>TORNEO</th>
                </tr>
            </thead>
            <tbody>
            {
                partido.map(partido => (
                    <tr key={partido.id_partido}>                        
                        <td>{partido.fecha}</td>
                        <td>{partido.hora}</td>
                        <td>{partido.lugar}</td>
                        <td>{partido.id_torneo}</td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}