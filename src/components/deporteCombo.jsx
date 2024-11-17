import { useState, useEffect } from "react"
import { getAllDeporte } from "../api/deporte.api"
import Form from 'react-bootstrap/Form';

export function DeporteCombo({ register, setValue }){
    const [deportes, setDeportes] = useState([]);
    useEffect(()=>{
        async function loadDeportes() {
            try {
                const res = await getAllDeporte();
                //console.log(res);
                setDeportes(res.data);
            } catch (error) {
                console.error('Error al cargar los deportes:', error);
            }            
        }
        loadDeportes();
    },[]);
    
    return (
        <Form.Select aria-label="Default select example" {...register("id_deporte", { required: true })} onChange={(e) => setValue("id_deporte", e.target.value)}>
            <option value="">Seleccione un deporte</option>
            {deportes.map(deporte => (
                <option key={deporte.id_deporte} value={deporte.id_deporte}>{deporte.nombre}</option>
        ))}
        </Form.Select>
    );
    {/*<select {...register("id_deporte", { required: true })} onChange={(e) => setValue("id_deporte", e.target.value)}>
            <option value="">Seleccione un deporte</option>
            {deportes.map(deporte => (
                <option key={deporte.id_deporte} value={deporte.id_deporte}>{deporte.nombre}</option>
            ))}
        </select>*/}
}