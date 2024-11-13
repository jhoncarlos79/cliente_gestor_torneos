import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createDeporte, updateDeporte, deleteDeporte, getDeporte } from '../api/deporte.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function DeporteForm(){
    
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
            const res=await updateDeporte(param.id, data);  // Actualizar un deporte
        }else{
            const res=await createDeporte(data);  // Crear un deporte
            console.log(res);
        }        
        navigate("/deportes")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadDeporte() {
            if (param.id) {
                const res = await getDeporte(param.id);
                const deporte = res.data;
                console.log(res);
                // Coloca los valores en el formulario
                setValue('nombre', deporte.nombre);
                setValue('num_jugadores', deporte.num_jugadores);
            }
        }
        loadDeporte();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <h1>FORMULARIO DEPORTES</h1>
            <form on onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.nombre && "El nombre del deporte es requerido"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Numero de jugadores</Form.Label>
                    <Form.Control type="number" placeholder='num_jugadores' {...register("num_jugadores", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.num_jugadores && "El numero de jugadores es requerido"}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button><br />    
                {/*<input type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                {errors.nombre && <span>El nombre del deporte es requerido</span>}
                <input type="number" placeholder='num_jugadores' {...register("num_jugadores", {required: true})}/>
                {errors.num_jugadores && <span>El numero de jugadores es requerido</span>}
                <button>Guardar</button>*/}
            </form>
            {param.id && (
                <Button variant="primary" onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el deporte?");
                    if (accepted){
                        await deleteDeporte(param.id);  // Eliminar un deporte
                        navigate("/deportes")
                    }
                }}>Borrar</Button>)}
            {/*{param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el deporte?");
                    if (accepted){
                        await deleteDeporte(param.id);  // Eliminar un deporte
                        navigate("/deportes")
                    }
                }}>Borrar</button>)}*/}
        </div>
    )
}