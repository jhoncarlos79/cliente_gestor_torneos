import { useEffect, useState } from "react";
import { getAllInscripcione} from "../api/inscripcione.api";
import Table from 'react-bootstrap/Table';

export function InscripcioneList(){
    const [inscripcione, setInscripciones] = useState([]);
    useEffect(() => {
        async function loadInscripciones() {
            const res=await getAllInscripcione();
            console.log(res);
            setInscripciones(res.data);
        }
        loadInscripciones();
    },[]);

    return (
        <div>
            <Table striped>
            <thead>
                <tr>                
                <th>inscripcione</th>
                <th>TORNEO</th>
                <th>FECHA INSCRIPCION</th>
                </tr>
            </thead>
            <tbody>
            {
                inscripcione.map(inscripcione => (
                    <tr key={inscripcione.id_inscripciones}>                        
                        <td>{inscripcione.id_equipo}</td>
                        <td>{inscripcione.id_torneo}</td>
                        <td>{inscripcione.fecha_inscripcion}</td>
                    </tr>
                    )
                )
            }
            </tbody>
            </Table>
        </div>
    ) 
}