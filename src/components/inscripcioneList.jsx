import { useEffect, useState } from "react";
import { getAllInscripcione} from "../api/inscripcione.api";
import { useNavigate } from "react-router-dom";
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

    const navigate=useNavigate();

    return (
        <div>
            <Table striped>
            <thead>
                <tr>                
                <th>EQUIPO</th>
                <th>TORNEO</th>
                <th>FECHA INSCRIPCION</th>
                </tr>
            </thead>
            <tbody>
            {
                inscripcione.map(inscripcione => (
                    <tr key={inscripcione.id_inscripciones}>                        
                        <td><a href="" 
                            onClick={()=>{
                                navigate('/inscripciones-add/' + inscripcione.id_inscripciones)
                            }}
                        >{inscripcione.id_equipo}</a></td>
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