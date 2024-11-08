import { useEffect, useState } from "react";
import { getAllPartido } from '../api/partido.api'
import { useNavigate } from "react-router-dom";
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

    const navigate=useNavigate();

    return (
        <div>
            <Table striped>
            <thead>
                <tr>                
                <th>FECHA</th>
                <th>HORA</th>
                <th>LUGAR</th>
                <th>TORNEO</th>
                <th>EQUIPO1</th>
                <th>RESULTADO EQUIPO1</th>
                <th>EQUIPO2</th>
                <th>RESULTADO EQUIPO2</th>
                </tr>
            </thead>
            <tbody>
            {
                partido.map(partido => (
                    <tr key={partido.id_partido}>                        
                        <td>{partido.fecha}</td>
                        <td>{partido.hora}</td>
                        <td><a href=""
                            onClick={()=>{
                                navigate('/partidos-add/' + partido.id_partido)
                            }}
                        >{partido.lugar}</a></td>
                        <td>{partido.id_torneo}</td>
                        <td>{partido.id_equipo1}</td>                        
                        <td>{partido.id_equipo2}</td>
                        <td>{partido.resultado_equipo1}</td>
                        <td>{partido.resultado_equipo2}</td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}