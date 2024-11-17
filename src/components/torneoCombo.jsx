import { useState, useEffect } from "react"
import { getAllTorneo } from "../api/torneo.api"
import Form from 'react-bootstrap/Form';

export function TorneoCombo({ register, setValue }){
    const [torneos, setTorneos] = useState([]);
    useEffect(()=>{
        async function loadTorneos() {
            try {
                const res = await getAllTorneo();
                //console.log(res);
                setTorneos(res.data);
            } catch (error) {
                console.error('Error al cargar los torneos:', error);
            }            
        }
        loadTorneos();
    },[]);
    
    return (
        <Form.Select aria-label="Default select example" {...register("id_torneo", { required: true })} onChange={(e) => setValue("id_torneo", e.target.value)}>
            <option value="">Seleccione un torneo</option>
            {torneos.map(torneo => (
                <option key={torneo.id_torneo} value={torneo.id_torneo}>{torneo.nombre}</option>
            ))}
        </Form.Select>
    );
    {/*<select {...register("id_torneo", { required: true })} onChange={(e) => setValue("id_torneo", e.target.value)}>
            <option value="">Seleccione un torneo</option>
            {torneos.map(torneo => (
                <option key={torneo.id_torneo} value={torneo.id_torneo}>{torneo.nombre}</option>
            ))}
        </select>*/}
}