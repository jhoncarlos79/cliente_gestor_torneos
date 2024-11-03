import { useEffect, useState } from "react";
import { getAllEquipo} from "../api/equipo.api";
import Table from 'react-bootstrap/Table';

export function EquipoList(){
    const [equipo, setEquipos] = useState([]);
    useEffect(() => {
        async function loadEquipos() {
            const res=await getAllEquipo();
            console.log(res);
            setEquipos(res.data);
        }
        loadEquipos();
    },[]);

    return (
        <div>
            <Table striped>
            <thead>
                <tr>                
                <th>NOMBRE</th>
                <th>USUARIO</th>
                <th>FECHA</th>
                <th>ESCUDO</th>                
                <th>DEPORTE</th>
                </tr>
            </thead>
            <tbody>
            {
                equipo.map(equipo => (
                    <tr key={equipo.id_equipo}>                        
                        <td>{equipo.nombre}</td>
                        <td>{equipo.id_usuario}</td>
                        <td>{equipo.fecha}</td>                        
                        <td><img src={equipo.escudo} width="50" height="50"/></td>
                        <td>{equipo.id_deporte}</td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}