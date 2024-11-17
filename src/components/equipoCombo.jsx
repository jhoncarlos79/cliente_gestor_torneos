import { useState, useEffect } from "react"
import { getAllEquipo } from "../api/equipo.api"
import Form from 'react-bootstrap/Form';

export function EquipoCombo({ register, setValue, campo }){
    const [equipos, setEquipos] = useState([]);
    useEffect(()=>{
        async function loadEquipos() {
            try {
                const res = await getAllEquipo();
                //console.log(res);
                setEquipos(res.data);
            } catch (error) {
                console.error('Error al cargar los Equipos:', error);
            }            
        }
        loadEquipos();
    },[]);
    
    return (
        <Form.Select aria-label="Default select example" {...register(campo, { required: true })} onChange={(e) => setValue(campo, e.target.value)}>
            <option value="">Seleccione un equipo</option>
            {equipos.map(equipo => (
                <option key={equipo.id_equipo} value={equipo.id_equipo}>{equipo.nombre}</option>
            ))}
        </Form.Select>
    );
    {/*<select {...register(campo, { required: true })} onChange={(e) => setValue(campo, e.target.value)}>
            <option value="">Seleccione un equipo</option>
            {equipos.map(equipo => (
                <option key={equipo.id_equipo} value={equipo.id_equipo}>{equipo.nombre}</option>
            ))}
        </select>*/}
}