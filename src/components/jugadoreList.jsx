import { useEffect, useState } from "react";
import { getAllJugadore } from "../api/jugadore.api"
import Table from 'react-bootstrap/Table';

export function JugadoreList(){
    const [jugadore, setJugadores] = useState([]);
    useEffect(() => {
        async function loadJugadores() {
            const res=await getAllJugadore();
            console.log(res);
            setJugadores(res.data);
        }
        loadJugadores();
    },[]);

    return (
        <div>
            <Table striped>
            <thead>
                <tr>                
                <th>FOTO</th>
                <th>NOMBRE</th>
                <th>FECHA DE NACIMIENTO</th>
                <th>ESTATURA</th>
                <th>PESO</th>                
                <th>EQUIPO</th>
                <th>FECHA DE VINCULACION</th>
                </tr>
            </thead>
            <tbody>
            {
                jugadore.map(jugadore => (
                    <tr key={jugadore.id_jugador}>
                        <td><img src={jugadore.foto} width="50" height="50"/></td>                      
                        <td>{jugadore.nombre}</td>
                        <td>{jugadore.fecha_nacimiento}</td>
                        <td>{jugadore.estatura}</td>
                        <td>{jugadore.peso}</td>
                        <td>{jugadore.id_equipo}</td>
                        <td>{jugadore.fecha_vinculacion}</td> 
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    )
}