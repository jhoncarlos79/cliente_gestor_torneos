import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createTorneo, updateTorneo, deleteTorneo, getTorneo } from '../api/torneo.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { DeporteCombo } from '../components/deporteCombo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function TorneoForm(){
    const {register, handleSubmit, setValue, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    //console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        //console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un libro o modificarlo
            //console.log("Modificando...");
            const res=await updateTorneo(param.id, data);  // Actualizar un torneo
        }else{
            const res=await createTorneo(data);  // Crear un torneo
            //console.log(res);
        }        
        navigate("/torneos")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadTorneo() {
            if (param.id) {
                const res = await getTorneo(param.id);
                const torneo = res.data;
                //console.log(res);
                // Coloca los valores en el formulario
                setValue('nombre', torneo.nombre);
                setValue('fecha_inicio', torneo.fecha_inicio);
                setValue('fecha_fin', torneo.fecha_fin);
                setValue('id_deporte', torneo.id_deporte);
            }
        }
        loadTorneo();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <h1>FORMULARIO TORNEOS</h1>
            <form on onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.nombre && "El nombre del torneo es requerido"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fecha de Inicio</Form.Label>
                    <Form.Control type="date" placeholder='fecha_inicio' {...register("fecha_inicio", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.fecha_inicio && "La fecha de inicio es requerida"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fecha de Fin</Form.Label>
                    <Form.Control type="date" placeholder='fecha_fin' {...register("fecha_fin", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.fecha_fin && "La fecha de fin es requerida"}
                    </Form.Text>
                </Form.Group>
                <DeporteCombo register={register} setValue={setValue}/>
                <Button variant="primary" type="submit">
                    Guardar
                </Button><br />
                {/*<input type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                {errors.nombre && <span>El nombre del deporte es requerido</span>}
                <input type="date" placeholder='fecha_inicio' {...register("fecha_inicio", {required: true})}/>
                {errors.fecha_inicio && <span>El fecha de inicio es requerida</span>}                
                <input type="date" placeholder='fecha_fin' {...register("fecha_fin", {required: true})}/>
                {errors.fecha_fin && <span>El fecha de fin es requerida</span>}
                <DeporteCombo register={register} setValue={setValue}/>                
                <input type="number" placeholder='id_deporte' {...register("id_deporte", {required: true})}/>
                {errors.id_deporte && <span>El id de deporte es requerido</span>}
                <button>Guardar</button>*/}
            </form>
            {param.id && (
                <Button variant="primary" onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el torneo?");
                    if (accepted){
                        await deleteTorneo(param.id);  // Eliminar un torneo
                        navigate("/torneos")
                    }
                }}>Borrar</Button>)}
            {/*param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el torneo?");
                    if (accepted){
                        await deleteTorneo(param.id);  // Eliminar un torneo
                        navigate("/torneos")
                    }
                }}>Borrar</button>)*/}
        </div>
    )
}